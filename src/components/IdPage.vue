<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id
</script>

<template>
    <h1>This is a basic Landing Page</h1>
    <p>The id is: {{ id }}</p>
</template>

