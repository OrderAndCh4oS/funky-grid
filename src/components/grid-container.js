Vue.component('grid-container', {
    props: ['boxes'],
    template: `
        <div class="box-container">
            <div v-for="box in boxes" class="box" :style="box.boxStyles">
                <image-box :box="box"></image-box>
            </div>
        </div>
   `
});