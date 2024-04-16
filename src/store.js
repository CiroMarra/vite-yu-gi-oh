import { reactive } from "vue";

export const store = reactive({
    archeList:[],
    cards: [],
    isLoading: true,
    archeFilter: ""
});