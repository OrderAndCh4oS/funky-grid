let masonry;
new Vue({
    el: '#root',
    data: {
        gridToggle: 'List View',
        showOverlay: false,
        showGridView: true,
        showListView: false,
        categories: [
            'all',
            'black',
            'white'
        ],
        boxes: dummyBoxes,
        filteredBoxes: [],
    },
    mounted: function () {
        this.filteredBoxes = this.filterBoxes('all');
        this.setPadding(this.filteredBoxes);
        this.$nextTick(function () {
            this.startMasonry()
        })
    },
    methods: {
        filterBoxes(category) {
            return this.boxes.filter(b => b.cat.some(c => c === category))
        },
        showCategory(category) {
            this.filteredBoxes = this.filterBoxes(category);
            this.$nextTick(function () {
                this.layoutMasonry()
            })
        },
        toggleView() {
            if (this.showGridView) {
                this.showGridView = false;
                this.gridToggle = 'Grid View'
            } else {
                this.showListView = false;
                this.gridToggle = 'List View'
            }
        },
        displayListView() {
            this.showListView = true
        },
        displayGridView() {
            this.showGridView = true;
            this.$nextTick(function () {
                this.startMasonry()
            })
        },
        gridFadeEnd() {
            if (!this.showGridView) {
                this.displayListView()
            }
        },
        listFadeEnd() {
            if (!this.showListView) {
                this.displayGridView()
            }
        },
        toggleDetails(box) {
            box.showDetails = !box.showDetails;
            this.showOverlay = box.showDetails
        },
        setPadding(boxes) {
            boxes.map(b => {
                const top = Math.floor(Math.random() * 22 + 8);
                const right = Math.floor(Math.random() * 22 + 8);
                const bottom = Math.floor(Math.random() * 22 + 8);
                const left = Math.floor(Math.random() * 22 + 8);
                const currentWidth = parseInt(b.boxStyles.width);
                const currentHeight = parseInt(b.boxStyles.height);
                b.boxStyles.paddingTop = top + 'px';
                b.boxStyles.paddingRight = right + 'px';
                b.boxStyles.paddingBottom = bottom + 'px';
                b.boxStyles.paddingLeft = left + 'px';
                b.boxStyles.width = currentWidth + left + right + 'px';
                b.boxStyles.height = currentHeight + top + bottom + 'px'
            });
            this.$nextTick(function () {
                this.startMasonry()
            })
        },
        startMasonry() {
            masonry = $('.box-container').masonry({
                itemSelector: '.box',
                columnWidth: 25,
            });
            masonry.masonry('remove', '.box')
        },
        layoutMasonry() {
            masonry.masonry('once', 'removeComplete', function () {
                masonry.masonry('reloadItems');
                masonry.masonry('layout')
            });
            masonry.masonry('remove', '.box')
        },
    },
})