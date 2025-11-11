<script setup>
import LandingPage from './components/LandingPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import IdPage from './components/IdPage.vue'

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <nav>
    <RouterLink to="/">Landing Page</RouterLink>
    <RouterLink to="/testing">Button</RouterLink>
    <RouterLink to="/test/:id">ID</RouterLink>
  </nav>

</template>

<style scoped></style>
