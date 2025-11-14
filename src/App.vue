<script setup>
import './main.css'
import FooterComponent from "@/components/pagecomponent/FooterComponent.vue";
import HeaderComponent from "@/components/pagecomponent/HeaderComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    main
  </main>
  <footer>
    <FooterComponent/>
    </footer>
</template>

<style  lang="scss">
body {
  margin: 0;
  header{
    height: 100vh;
  }
  main {
    flex-grow: 1;
  }

}



</style>
