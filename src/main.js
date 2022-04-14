import { createApp } from 'vue'

import 'sakura.css/css/sakura-dark.css'

import App from './App.vue'
import { createPluginLibp2p } from './p2p'

const main = async () => {
  createApp(App)
    .use(await createPluginLibp2p())
    .mount('#app')
}

main()
