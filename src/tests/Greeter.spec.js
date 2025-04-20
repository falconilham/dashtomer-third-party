import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Greeter from '../components/Greeter.vue';

describe('Greeter Component', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('renders correctly with default props', () => {
        const wrapper = mount(Greeter);
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').text()).toBe('Click Me');
    });

    it('renders with custom button text from props', () => {
        const wrapper = mount(Greeter, {
            props: {
                buttonText: 'Press Me'
            }
        });
        expect(wrapper.find('button').text()).toBe('Press Me');
    });

    it('prints the default message when clicked', async () => {
        const consoleSpy = vi.spyOn(console, 'log');
        const wrapper = mount(Greeter);

        await wrapper.find('button').trigger('click');

        expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
        consoleSpy.mockRestore();
    });

    it('prints a custom message when clicked', async () => {
        const consoleSpy = vi.spyOn(console, 'log');
        const customMessage = 'Hello from the test!';
        const wrapper = mount(Greeter, {
            props: {
                message: customMessage
            }
        });

        await wrapper.find('button').trigger('click');

        expect(consoleSpy).toHaveBeenCalledWith(customMessage);
        consoleSpy.mockRestore();
    });
});