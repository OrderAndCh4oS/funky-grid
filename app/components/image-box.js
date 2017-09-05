'use strict';

Vue.component('image-box', {
    props: ['box'],
    template: '\n        <transition name="fade">\n            <div v-if="box.showDetails" class="box-image-over-holder" :style="boxHolderOffset(box.boxStyles)">\n                <button @click="close(box)" class="close">X</button>\n                <img :src="box.image" class="box-image-over">\n                <div class="info-holder">\n                    <h3>{{box.title}}</h3>\n                    <a :href="box.url">View Project</a>\n                </div>\n            </div>\n        </transition>\n    ',
    methods: {
        boxHolderOffset: function boxHolderOffset(styles) {
            return { top: parseInt(styles.paddingTop) + "px", left: parseInt(styles.paddingLeft) + "px" };
        },
        close: function close() {
            this.$emit('close-box');
        }
    }
});