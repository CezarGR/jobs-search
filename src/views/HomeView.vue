<template>
  <main class="HeaderComponent">
    <h1 class="HeaderComponent__title">Jobs Search</h1>
  </main>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style scoped lang="scss">
.HeaderComponent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__title {
    font-size: 2.5rem;
    cursor: pointer;
  }

  &__title:hover {
    color: var(--color-action);
  }
}
</style>
