import { createApp } from 'vue'
import Greeter from './components/Greeter.vue'

window.Greeter = {
    init(selector, props) {
        console.log('Greeter.init', selector, props)
        const el = document.querySelector(selector)
        if (el) {
            const app = createApp(Greeter, props)
            app.mount(el)
        } else {
            console.error('Element not found:', selector)
        }
    }
}
