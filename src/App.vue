<script setup>
import './main.css'
import FooterComponent from "@/components/pagecomponent/FooterComponent.vue";
</script>

<template>
  <header>
    header
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
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    flex-grow: 1;
  }

}



</style>
