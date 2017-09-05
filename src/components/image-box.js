Vue.component('image-box', {
    props: ['box'],
    template: `
        <div>
            <img :src="box.image" class="box-image" @mousedown="toggleBox()">
            <image-detail-box :box="box"></image-detail-box>
        </div>
    `,
    methods: {
        toggleBox() {
            Event.$emit('toggle-box', this.box)
        }
    }
});