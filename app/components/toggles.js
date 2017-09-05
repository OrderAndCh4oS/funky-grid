'use strict';

Vue.component('toggles', {
    props: ['categories', 'gridtoggle'],
    template: '\n        <div class="toggles">\n            <template v-for="category in categories">\n                <toggle @filter-category="filterCategory" :category="category" :selected="category == \'all\'"></toggle>&nbsp;\n            </template>\n            <button @click="$emit(\'toggle-grid\')">{{ gridtoggle }}</button>\n        </div>\n    ',
    data: function data() {
        return {
            active: 'all'
        };
    },

    methods: {
        filterCategory: function filterCategory(cat) {
            this.$children.forEach(function (toggle) {
                toggle.isActive = toggle.category === cat;
            });
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
    template: '<button @click="$emit(\'filter-category\', category)" name="category" :class="{\'active\':this.isActive}" >{{category | capitalise}}</button>',
    data: function data() {
        return {
            isActive: false
        };
    },
    mounted: function mounted() {
        this.isActive = this.selected;
    },

    filters: {
        capitalise: function capitalise(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});