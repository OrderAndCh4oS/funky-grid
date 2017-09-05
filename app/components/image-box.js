'use strict';

Vue.component('image-box', {
    props: ['box'],
    template: '\n        <div>\n            <img :src="box.image" class="box-image" @mousedown="$emit(\'toggle-detail\', box)">\n            <image-detail-box :box="box" @close-box="$emit(\'toggle-detail\', box)"></image-detail-box>\n        </div>\n    '
});