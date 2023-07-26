<template>
    <div class="InputLocationComponent">
        <span class="material-symbols-outlined" @mousemove="showInput">
            location_on
        </span>
        <transition>
            <input type="text" v-model="inputValue" v-show="visibleInput" placeholder="Busque pela cidade">
        </transition>
    </div>
</template>

<script>
export default {
    components: {  },
    name: 'InputLocationComponent',
    props: {
        location: {
            type: String,
            required: true
        }
    },
    data: () => ({
        visibleInput: false
    }),
    methods: {
        showInput() {
            this.visibleInput = true;
        }
    },
    watch: {
        inputValue(value) {
            this.visibleInput = !!value;
        }
    }
}
</script>

<style scoped lang="scss">
.InputLocationComponent {
    display: flex;
    margin: 5px;
    flex-direction: row;
    align-content: center;
    align-items: center;

    input {
        border: none;
        height: 100%;
        width: 200px;
        margin-left: 10px;
        color: #ABABAB;
        font-size: 1rem;
    }

    input:focus {
        border: 0 none;
        outline: 0;
    }

    .v-enter-active,
    .v-leave-active {
        transition:  0.5s;
    }

    .v-enter-from,
    .v-leave-to {
        width: 0px;
        opacity: 0;
    }
}
</style>