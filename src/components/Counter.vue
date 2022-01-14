<template>
  <div class="flex flex-row flex-ai-center flex-jc-center gap-10">
    <button @click="increment()">Incrémenter</button>
    <button @click="reset()" :disabled=isDisabled>Reset</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    result: Number,
    isDisabled: Boolean
  },
  methods: {
    increment() {
      let count = this.result + 1;
      this.$emit("update-result", count);
    },
    reset() {
      this.$emit("update-result", 0);
    }
  }
};
</script>
