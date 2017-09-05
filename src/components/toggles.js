Vue.component('toggles', {
    props: ['categories', 'gridtoggle'],
    template: `
        <div class="toggles">
            <template v-for="category in categories">
                <toggle @filter-category="filterCategory" :category="category" :selected="category == 'all'"></toggle>&nbsp;
            </template>
            <button @click="$emit('toggle-grid')">{{ gridtoggle }}</button>
        </div>
    `,
    data() {
        return {
            active: 'all'
        }
    },
    methods: {
        filterCategory(cat) {
            this.$children.forEach(
                toggle => {
                    toggle.isActive = (toggle.category === cat);
                }
            );
            this.$emit('filter-category', cat);
        }
    }
});