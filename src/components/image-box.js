Vue.component('image-box', {
    props: ['box'],
    template: `
        <div>
            <img :src="box.image" class="box-image" @mousedown="$emit('toggle-detail', box)">
            <image-detail-box :box="box" @close-box="$emit('toggle-detail', box)"></image-detail-box>
        </div>
    `
});