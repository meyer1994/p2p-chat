<script setup>
import { ref, computed, inject, onMounted } from 'vue'

import { toString } from 'uint8arrays/to-string'
import { fromString } from 'uint8arrays/from-string'

const libp2p = inject('libp2p')

const subs = ref([])
const peers = ref([])
const message = ref('')
const messages = ref([])

const chat = computed(() => messages.value.join('\n'))

const updatePeers = async e => peers.value.push(e.detail)
onMounted(() => libp2p.peerStore.addEventListener('peer', updatePeers))

const updateSubs = e => {
  for (const sub of e.detail.subscriptions) {
    if (sub.topic !== 'chat') {
      continue
    }

    if (sub.subscribe !== true) {
      continue
    }

    subs.value.push(e.detail)
    return
  }
}
onMounted(() => libp2p.pubsub.addEventListener('pubsub:subscription-change', updateSubs))

const onMessage = async e => {
  const data = toString(e.detail.data)
  messages.value.push(data)
}
onMounted(() => libp2p.pubsub.addEventListener('chat', onMessage))

const sendMessage = async () => {
  const detail = fromString(message.value)
  await libp2p.pubsub.dispatchEvent({ type: 'chat', detail })
  messages.value.push(message.value)
  message.value = ''
}
</script>

<template>
  <div id="app">
    <h1> P2P chat </h1>
    <p> Your id: {{ libp2p.peerId }} </p>

    <!-- Chat -->
    <section>
      <h2> Messages </h2>
      <p> Total messages: {{ messages.length }} </p>

      <!-- Messages -->
      <textarea rows="10" readonly v-model="chat" />

      <!-- Send -->
      <form @submit.prevent="sendMessage">
        <label for="message"> Message </label>
        <input type="text" name="message" v-model="message" placeholder="msg">
        <button @press="sendMessage"> Send </button>
      </form>
    </section>

    <!-- Chat -->
    <section>
      <h2> Chat ({{ subs.length }}) </h2>
      <ul>
        <li v-for="s of subs" :key="s.peerId"> {{ s.peerId }} </li>
      </ul>
    </section>

    <!-- Peers -->
    <section>
      <h2> Peers ({{ peers.length }}) </h2>
      <ul>
        <li v-for="p of peers" :key="p.id"> {{ p.id }} </li>
      </ul>
    </section>
  </div>
</template>
