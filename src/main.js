import { createApp } from 'vue'
import App from './App.vue'

import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css'

const app = createApp(App)

app.use(VCalendar)
app.mount('#app')
