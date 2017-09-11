'use strict';

Vue.component('list-container', {
    props: ['boxes'],
    template: '\n        <div class="list-container">\n            <div v-for="box in boxes" class="list-box">\n                <img :src="box.smlImage" class="list-image">\n                <div class="list-info-holder">\n                    <h3>{{box.title}}</h3>\n                    <a :href="box.url">View Project</a>\n                </div>\n            </div>\n        </div>\n   '
});