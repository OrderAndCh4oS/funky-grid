'use strict';

Vue.component('toggles', {
    props: ['categories', 'gridtoggle'],
    template: '\n        <div class="toggles">\n            <template v-for="category in categories">\n                <toggle :category="category" :selected="category == \'all\'"></toggle>&nbsp;\n            </template>\n            <button @click="toggleGrid">{{ gridtoggle }}</button>\n        </div>\n    ',
    data: function data() {
        return {
            active: 'all'
        };
    },
    mounted: function mounted() {
        var _this = this;

        Event.$on('filter-category', function (cat) {
            return _this.filterCategory(cat);
        });
    },

    methods: {
        filterCategory: function filterCategory(cat) {
            this.$children.forEach(function (toggle) {
                toggle.isActive = toggle.category === cat;
            });
        },
        toggleGrid: function toggleGrid() {
            Event.$emit('toggle-grid');
        }
    }
});