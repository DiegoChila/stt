<template>
  <div id="app">
    <Header/>
    <div class="page_st">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
.page_st {
  min-height: 79vh;
}

#app {
  background-image: url(./assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
