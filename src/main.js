import { createApp } from 'vue'
import App from './App.vue'
import head from './components/heade.vue'
import docs from './docs.vue'
import themes from './themes.vue'
import download from './download.vue'

createApp(App).mount('#app')
createApp(head).mount('#head')
createApp(docs).mount('#docs')
createApp(themes).mount('#themes')
createApp(download).mount('#download')