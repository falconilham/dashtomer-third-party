<template>
  <button @click="greet">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "Greeter",
  props: {
    message: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Click Me",
    }
  },
  methods: {
    greet() {
      console.log(this.message);
      alert(this.message);
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
