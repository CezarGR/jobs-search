<template>
    <div class="SearchComponent">
        <input type="text" v-model="search" placeholder="Busque sua vaga">
        <input-location-component 
            :location="location"
        />
    </div>
</template>

<script>
import InputLocationComponent from '@/components/InputLocationComponent.vue';

export default {
    components: { InputLocationComponent },
    name: 'SearchComponent',
    data: () => ({
        search: '',
        location: ''
    })
}
</script>

<style scoped lang="scss">
.SearchComponent {
    padding: 10px 10px;
    height: 50px;
    width: 50%;
    border-radius: 25px;
    box-sizing: border-box;
    border: 1px solid #C7C7C7;

    display: flex;
    align-items: center;

    input {
        border: none;
        height: 100%;
        width: 100%;
        margin-left: 10px;
        color: #ABABAB;
        font-size: 1rem;
    }

    input:focus {
        border: 0 none;
        outline: 0;
    }
}
</style>