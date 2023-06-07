import { defineStore } from 'pinia';

export const useSearchStore = defineStore({
    id: 'search',
    state: () => ({
        people: [],
        criteria: "",
    }),
    actions: {
        async getCriteria() {
            return this.criteria;
        },
        async setCriteria(criteria) {
            this.criteria = criteria;
        },
        async searchResult(people) {
            this.resetSearch();

            this.people = people;
        },
        async resetSearch() {
            this.people = [];
        },
    }
});