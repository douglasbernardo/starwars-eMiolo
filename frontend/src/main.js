import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import gAuthPlugin from "vue3-google-oauth2"


const app = createApp(App)
app.use(routes)
app.use(gAuthPlugin,{
    clientId:"951672041729-kme29stknif85f4pgdm2sjrov5468fib.apps.googleusercontent.com",
    scope:"email",
    prompt:"consent"
})

app.mount("#app")
