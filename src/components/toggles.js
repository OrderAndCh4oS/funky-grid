Vue.component('toggles', {
    props: ['categories', 'gridtoggle'],
    template: `
        <div class="toggles">
            <template v-for="category in categories">
                <toggle :category="category" :selected="category == 'all'"></toggle>&nbsp;
            </template>
            <button @click="$emit('toggle-grid')">{{ gridtoggle }}</button>
        </div>
    `,
    data() {
        return {
            active: 'all'
        }
    },
    mounted() {
        Event.$on('filter-category', (cat) => this.filterCategory(cat))
    },
    methods: {
        filterCategory(cat) {
            this.$children.forEach(
                toggle => {
                    toggle.isActive = (toggle.category === cat);
                }
            );
        }
    }
});