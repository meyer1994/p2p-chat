import { createApp } from 'vue'

import 'sakura.css/css/sakura-dark.css'

import App from './App.vue'
import * as Node from './p2p'

const main = async () => {
  const node = await Node.create()

  createApp(App)
    .use(Node.plugin, node)
    .mount('#app')
}

main()
