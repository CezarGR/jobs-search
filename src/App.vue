<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <header-component />
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
