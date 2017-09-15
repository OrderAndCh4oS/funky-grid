'use strict';

Vue.component('grid-container', {
    props: ['boxes'],
    template: '\n        <div class="box-container">\n            <div v-for="box in boxes" class="box" :style="box.boxStyles">\n                <image-box :box="box"></image-box>\n            </div>\n        </div>\n   '
});