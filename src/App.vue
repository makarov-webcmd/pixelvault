<script setup>
import './main.css'
import FooterComponent from "@/components/pagecomponent/FooterComponent.vue";
import HeaderComponent from "@/components/pagecomponent/HeaderComponent.vue";
import router from "@/router/index.js";
</script>

<template>
  <div class="layout">
    <header>
      <HeaderComponent />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style lang="scss">
body {
  background: var(--bg-main);
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  width: 100%;
}

main {
  flex-grow: 1;
}

footer {
  width: 100%;
}
</style>
