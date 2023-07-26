<template>
  <main class="HeaderComponent">
    <h1 class="HeaderComponent__title">Jobs Search</h1>
    <search-component />
  </main>
</template>

<script setup>
import SearchComponent from '@/components/SearchComponent.vue';
</script>

<style scoped lang="scss">
.HeaderComponent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: var(--color-text);

  &__title {
    font-size: 2.5rem;
    cursor: pointer;
  }

  &__title:hover {
    color: var(--color-action);
  }
}
</style>
