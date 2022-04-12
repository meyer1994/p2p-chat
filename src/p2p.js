import { createLibp2p } from 'libp2p'

import { Mplex } from '@libp2p/mplex'
import { Noise } from '@chainsafe/libp2p-noise'
import { WebRTCStar } from '@libp2p/webrtc-star'
import { Bootstrap } from '@libp2p/bootstrap'
import { FloodSub } from '@libp2p/floodsub'

const list = [
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt'
]

const listen = [
  '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
  '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
]

export const createP2p = async options => {
  const bootstrap = new Bootstrap({ list })
  const webrtc = new WebRTCStar()

  const node = await createLibp2p({
    addresses: { listen },
    transports: [webrtc],
    connectionEncryption: [new Noise()],
    streamMuxers: [new Mplex()],
    peerDiscovery: [bootstrap, webrtc.discovery],
    pubsub: new FloodSub()
  })

  await node.start()

  return {
    install (app, options) {
      app.config.globalProperties.$p2p = node
      app.provide('p2p', node)
    }
  }
}
