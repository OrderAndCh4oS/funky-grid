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

Vue.component('toggle', {
    props: {
        'category': {
            'required': true
        },
        'selected': {
            'default': false
        }
    },
    template: `<button @click="$emit('filter-category', category)" name="category" :class="{'active':this.isActive}" >{{category | capitalise}}</button>`,
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    filters: {
        capitalise: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});