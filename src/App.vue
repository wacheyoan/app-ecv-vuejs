<template>
  <div id="app">
    <Header />
    <div class="main-container">
        <div class="container">
          <div class="flex flex-column flex-ai-center flex-jc-center">
            <p>La valeur de la variable est : {{ result }}</p>
            <p v-if="result === 0">Le paragraphe s'affiche car la variable est égale à 0</p>
          </div>
          <Counter :result="result" @update-result="update" :isDisabled="result === 0" />
          <Select />
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Counter from './components/Counter.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Select from './components/Select.vue';


export default {
  name: 'App',
  components: {
    Counter,
    Footer,
    Header,
    Select
  },
  data() {
    return {
      result : 0
    }
  },
  methods: {
    update(number) {
      this.result = number;
    }
  }
}
</script>

<style lang="scss">

body{
  margin: 0;
  overflow: hidden;
}

body * {
  padding: 0;
}

body > div{
  height: 100vh;
  display: flex;
  flex-direction: column;
}

ul{
  list-style-type: none;
}

nav ul li:first-child{
  margin-right: auto;
}

nav{
  border: 2px solid black;
  padding-left: 16px;
  padding-right: 16px;
}

.header a,
.footer a{
  color: black;
  text-decoration: none;
}

.flex{
  display: flex;
}

.flex-row{
  flex-direction: row;
}

.flex-column{
  flex-direction: column;
}

.flex-ai-center{
  align-items: center;
}

.flex-jc-center{
  justify-content: center;
}

.flex-jc-fend{
  justify-content: flex-end;
}

.flex-jc-fstart{
  justify-content: flex-start;
}

.gap-10{
  gap: 10px;
}

.w-fit{
  width: fit-content;
}

.w-100p{
  width: 100%;
}

.w-200{
  width: 200px;
}

.text-blue{
  color: blue;
}

.bold{
  font-weight: bold;
}

.footer{
  width: 100%;
  border: 2px solid black;
  margin-top:auto; 

}

.container{
  margin-top: 16px;
  margin-bottom: 16px;
}

.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}

</style>
