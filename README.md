# Vue.js Greeter Component

A standalone Vue.js component that can be embedded in third-party applications using a `<script>` tag.

## Features

- Self-contained Vue.js 3 component
- No conflicts with existing styles or scripts in the host application
- Customizable props for flexibility
- Single JavaScript file that can be loaded directly into any HTML page

## Installation

1. Download the compiled component from the `dist` folder:
   - `compiled-greeter-component.umd.js`
   - `compiled-greeter-component.umd.js.map` (optional, for debugging)

2. Include the script in your HTML file:
   ```html
   <script src="compiled-greeter-component.umd.js"></script>
   ```

## Usage

Basic implementation:

```html
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
</script>
```

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| message | String | 'Hello World!' | The message to print when the button is clicked |
| buttonText | String | 'Click Me' | The text displayed on the button |

## Virtual DOM Usage

This component utilizes Vue.js's Virtual DOM rendering system. The decision to use Virtual DOM was made for several reasons:

1. **Performance**: Virtual DOM optimizes the rendering process by only updating the parts of the DOM that actually change, which is more efficient than directly manipulating the DOM.

2. **Simplicity**: Vue's reactivity system handles state changes automatically, making the code simpler and more maintainable.

3. **Compatibility**: The Virtual DOM abstraction helps avoid direct DOM manipulation that might conflict with other scripts on the host page.

4. **Component Architecture**: Using Vue's component system allows for better organization and reusability of the code.

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd vue-greeter-component
npm install
```

### Build

To build the component:

```bash
npm run build
```

This will generate the compiled component in the `dist` folder with the following files:
- `compiled-greeter-component.umd.js` - The minified UMD bundle
- `compiled-greeter-component.umd.js.map` - Source map for debugging

### Development Server

To run the development server:

```bash
npm run dev
```

### Testing

This project uses Vitest for unit testing. To run the tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

#### Test Coverage

The tests verify that:
- The component renders correctly
- The button appears as expected
- Clicking the button prints the expected message
- The component correctly handles different messages passed via props

## License

MIT