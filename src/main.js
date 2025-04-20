import { createApp } from 'vue';
import Greeter from './components/Greeter.vue';

// Create a global Greeter object that will be accessible from the browser
window.Greeter = {
    init(selector, props = {}) {
        const targetElement = document.querySelector(selector);

        if (!targetElement) {
            console.error(`Element with selector "${selector}" not found.`);
            return;
        }

        // For debugging
        console.log(`Initializing Greeter on ${selector} with props:`, props);

        try {
            const app = createApp(Greeter, props);
            app.mount(targetElement);
            console.log('Greeter mounted successfully');
            return app;
        } catch (error) {
            console.error('Error mounting Greeter component:', error);
        }
    }
};

// For debugging - log when the script is loaded
console.log('Greeter module loaded');