Vue.component('list-container', {
    props: ['boxes'],
    template: `
        <div class="list-container">
            <div v-for="box in boxes" class="list-box">
                <img :src="box.smlImage" class="list-image">
                <div class="list-info-holder">
                    <h3>{{box.title}}</h3>
                    <a :href="box.url">View Project</a>
                </div>
            </div>
        </div>
   `
});