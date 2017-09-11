'use strict';

Vue.component('toggle', {
    props: {
        'category': {
            'required': true
        },
        'selected': {
            'default': false
        }
    },
    template: '<button @click="filterCategory" name="category" :class="{\'active\':this.isActive}" >{{category | capitalise}}</button>',
    data: function data() {
        return {
            isActive: false
        };
    },
    mounted: function mounted() {
        this.isActive = this.selected;
    },

    methods: {
        filterCategory: function filterCategory() {
            Event.$emit('filter-category', this.category);
        }
    },
    filters: {
        capitalise: function capitalise(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});