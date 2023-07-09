<template>
    <div class="FavoriteComponent">
        <div class="FavoriteComponent__header">
            <span class="material-symbols-outlined" @click="close()">close</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'FavoriteComponent',
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="scss">
.FavoriteComponent {
    padding: 10px;
    display: flex;
    box-shadow: -1px 0px 7px;
    background: white;
    height: 100vh;
    z-index: 3;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 200px;

    &__header {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: end;
    }
}
</style>