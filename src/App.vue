<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';
import AppSelect from "./components/AppSelect.vue"

export default {
  components: {
    AppHeader,
    CharacterList,
    AppLoader,
    AppSelect
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

  

    getArcheFromApi(){
				axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
				.then((response) => {
					store.archeList = response.data;
				})

    },





    getCardsFromApi() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.qParams })
        .then((response) => {
          store.cards = response.data.data;
          store.isLoading = false;
        })
    },
    


    filterApi(){
				if (store.archeFilter !== ""){
					this.qParams.archetype = store.archeFilter
				} else{
					delete this.qParams.archetype
				};

				axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.qParams })
				.then((response) => {
				store.cards = response.data.data;
				console.log = response.data.data;
				})
			}


  },
  mounted() {
    this.getCardsFromApi();
    this.getArcheFromApi();
  }
};

</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
 

  <main>
    <div class="container">
      <AppSelect @archeFilter="filterApi"></AppSelect>
      <CharacterList v-if="!store.isLoading"></CharacterList>
      <AppLoader v-else></AppLoader>
    </div>
  </main>
</template>

<style lang="scss">
main {
  background-color: white;
}


</style>