'use strict';

Vue.component('image-box', {
    props: ['box'],
    template: '\n        <div>\n            <img :src="box.image" class="box-image" @mousedown="toggleBox()">\n            <image-detail-box :box="box"></image-detail-box>\n        </div>\n    ',
    methods: {
        toggleBox: function toggleBox() {
            Event.$emit('toggle-box', this.box);
        }
    }
});