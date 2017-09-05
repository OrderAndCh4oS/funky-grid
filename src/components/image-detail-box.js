Vue.component('image-detail-box', {
    props: ['box'],
    template: `
        <transition name="fade">
            <div v-if="box.showDetails" class="box-image-over-holder" :style="boxHolderOffset(box.boxStyles)">
                <button @click="close(box)" class="close">X</button>
                <img :src="box.image" class="box-image-over">
                <div class="info-holder">
                    <h3>{{box.title}}</h3>
                    <a :href="box.url">View Project</a>
                </div>
            </div>
        </transition>
    `,
    methods: {
        boxHolderOffset(styles) {
            return {top: parseInt(styles.paddingTop) + "px", left: parseInt(styles.paddingLeft) + "px"}
        },
        close() {
            this.$emit('close-box');
        }
    }
});