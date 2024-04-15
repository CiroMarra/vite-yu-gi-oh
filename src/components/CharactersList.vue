<script>
import { store } from '../store.js';
import CharacterCard from './CharacterCard.vue';

export default {
    name: 'CharacterList',
    components: {
        CharacterCard
    },
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <section class="characters-card">
        <div class="container">
            <div class="cards-row">
                <CharacterCard v-for="card in store.cards" :key="card.id" :cardInfo="card"></CharacterCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.characters-card {
    .cards-row {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>