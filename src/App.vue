<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
@import "assets/styles/variables";

body {
  & * {
    padding: 0;
    font-size: var(--default-font-size);
    font-family: var(--default-font-family);
  }

  & > div {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  margin: 0;
  overflow: hidden;
}

</style>
