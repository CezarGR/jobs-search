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
    <span class="material-symbols-outlined" @click="showFavoriteDialog">favorite</span>
  </nav>

  <transition>
    <favorite-component
        v-show="favoriteDialogDisabled"
        @close="closeFavoriteDialog"
    />
  </transition>
</template>

<script>
import FavoriteComponent from '@/components/FavoriteComponent.vue';

export default {
  components: { FavoriteComponent },
    name: 'HeaderComponent',
    data: () => ({
        favoriteDialogDisabled: false
    }),
    methods: {
        showFavoriteDialog() {
            this.favoriteDialogDisabled = true
        },
        closeFavoriteDialog() {
            this.favoriteDialogDisabled = false
        }
    }
}
</script>

<style scoped lang="scss">
.HeaderComponent {
    padding: 10px;
    display: flex;
    justify-content: space-between;

    &__navigation {
        a {
            margin: 0 10px;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition:  0.5s;
}

.v-enter-from,
.v-leave-to {
  width: 0;
  right: -50px;
}
</style>