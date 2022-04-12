import { createApp } from 'vue'

import 'sakura.css/css/sakura-dark.css'

import App from './App.vue'
import { createP2p } from './p2p'

const main = async () => {
  const p2p = await createP2p()

  createApp(App)
    .use(p2p)
    .mount('#app')
}

main()
