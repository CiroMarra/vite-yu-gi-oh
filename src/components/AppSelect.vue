<script>
    import { store } from '../store.js';

    export default{
        name: 'AppSelect',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
        <select v-model="store.archeFilter" @change="$emit('archeFilter')">
            <option v-if="!store.archeFilter" value="" disabled selected>Scegli un archetipo</option>
            <option v-for="archetype in store.archeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
    .container{
        max-width: 200px;
        margin: auto;
    }
</style>