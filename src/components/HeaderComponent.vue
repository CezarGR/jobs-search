<template>
  <nav class="HeaderComponent">
    <slot>
        <span></span>
    </slot>
    <div class="HeaderComponent__navigation">
        <a href="">conta</a>
        <a href="">home</a>
        <a href="">empresa</a>
    </div>
    <span class="material-symbols-outlined">favorite</span>
  </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data: () => ({

    })
}
</script>

<style scoped lang="scss">
.HeaderComponent {
    display: flex;
    justify-content: space-between;

    &__navigation {
        a {
            margin: 0 10px;
        }
    }
}
</style>