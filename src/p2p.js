import { createLibp2p } from 'libp2p'

import { KadDHT } from '@libp2p/kad-dht'
import { Mplex } from '@libp2p/mplex'
import { Noise } from '@chainsafe/libp2p-noise'
import { FloodSub } from '@libp2p/floodsub'
// import { Bootstrap } from '@libp2p/bootstrap'
import { WebRTCStar } from '@libp2p/webrtc-star'

// const list = [
//   '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
//   '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
//   '/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp',
//   '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
//   '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt'
// ]

const listen = [
  '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
  '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
]

export const createPluginLibp2p = async options => {
  // const bootstrap = new Bootstrap({ list })
  const webrtc = new WebRTCStar()

  const node = await createLibp2p({
    addresses: { listen },
    transports: [webrtc],
    connectionEncryption: [new Noise()],
    streamMuxers: [new Mplex()],
    peerDiscovery: [webrtc.discovery],
    pubsub: new FloodSub(),
    dht: new KadDHT()
  })

  await node.start()

  window.libp2p = node

  return {
    install (app, options) {
      app.config.globalProperties.$libp2p = node
      app.provide('libp2p', node)
    }
  }
}
