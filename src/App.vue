<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';

export default {
  components: {
    AppHeader,
    CharacterList,
    AppLoader
  },
  data() {
    return {
      store,
      qParams: {
					num: 20,
					offset: 0
				}

    };
  },

  methods: {
    getCardsFromApi() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.qParams })
        .then((response) => {
          store.cards = response.data.data;
          store.isLoading = false;
        })
    }
  },
  mounted() {
    this.getCardsFromApi();
  }
};

</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <CharacterList v-if="!store.isLoading"></CharacterList>
    <AppLoader v-else></AppLoader>
  </main>
</template>

<style lang="scss">
</style>