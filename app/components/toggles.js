Vue.component('toggles', {
    props: ['categories', 'gridtoggle'],
    template: `
        <div class="toggles">
            <template v-for="category in categories">
                <button @click="$emit('filter-category', category)">{{category | capitalise}}</button>&nbsp;
            </template>
            <button @click="$emit('toggle-grid')">{{ gridtoggle }}</button>
        </div>
    `,
    filters: {
        capitalise: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})