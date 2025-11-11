<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const id = ref(7)
</script>

<template>
  <nav>
    <router-link to="/">Landing Page</router-link>
    <router-link to="/testing">Button Page</router-link>
    <router-link to="/test/$id">Id</router-link>
  </nav>
  <router-view />

</template>

<style scoped>
router-link {
  margin: 50px;
}
</style>
