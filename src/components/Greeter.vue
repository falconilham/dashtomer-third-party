<template>
  <div class="greeter-container">
    <button class="greeter-button" @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'Greeter',
  props: {
    message: {
      default: 'Hello World!'
    },
    buttonText: {
      default: 'Click Me'
    }
  },
  mounted() {
    console.log('Greeter component mounted with props:', this.$props);
  },
  methods: {
    handleClick() {
      console.log(this.message);
      alert(this.message); // Also show an alert for visual confirmation
    }
  }
}
</script>

<style>
.greeter-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
}

.greeter-button {
  /* Base styling */
  background-color: #4F46E5;
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  /* Modern aesthetics */
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  font-size: 14px;
}

/* Hover effect */
.greeter-button:hover {
  background-color: #4338CA;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(79, 70, 229, 0.2), 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* Active/pressed state */
.greeter-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.1);
  background-color: #3730A3;
}

/* Focus state - accessibility */
.greeter-button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3), 0 4px 6px rgba(79, 70, 229, 0.15);
}

/* Dark mode considerations - automatically adapts if host site uses dark mode */
@media (prefers-color-scheme: dark) {
  .greeter-button {
    background-color: #6366F1;
    box-shadow: 0 4px 6px rgba(99, 102, 241, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .greeter-button:hover {
    background-color: #818CF8;
  }

  .greeter-button:active {
    background-color: #4F46E5;
  }
}
</style>