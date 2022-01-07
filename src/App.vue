<template>
  <div id="app">
    <div class="header flex flex-row">
      <nav class="w-100p">
        <ul class="flex flex-row flex-jc-fend gap-10">
          <li><img class="logo w-200" src="" alt="Logo" ></li>
          <li><a href="">Menu 1</a></li>
          <li><a href="">Menu 2</a></li>
          <li><a href="">Menu 3</a></li>
        </ul>
      </nav>
    </div>
    <div class="main-container container">
      <div class="flex flex-column flex-ai-center flex-jc-center">
        <p class="text-blue bold">Hello le monde !</p>
        <p>La valeur de la variable est : {{ result }}</p>
        <p v-if="result === 0">Le paragraphe s'affiche car la variable est égale à 0</p>
      </div>
      <div class="flex flex-row flex-ai-center flex-jc-center">
        <button @click="result++">Incrémenter</button>
        <button @click="result = 0">Reset</button>
      </div>
    </div>
    <div class="footer">
      <ul class="flex flex-row flex-jc-center gap-10">
        <li><a href="">Lien 1</a></li>
        <li><a href="">Lien 2</a></li>        
        <li><a href="">Lien 3</a></li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      result : 0
    }
  }
}
</script>

<style lang="scss">

body{
  margin: 0;
  overflow: hidden;
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

</style>
