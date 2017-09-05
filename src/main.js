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
        boxes: [
            {
                title: 'Image One',
                location: 'Location One',
                url: 'https://google.com',
                image: 'http://placehold.it/200x300/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '200px',
                    height: '300px',
                },
                showDetails: false,
            },
            {
                title: 'Image Two',
                location: 'Location Two',
                url: 'https://google.com',
                image: 'http://placehold.it/150x220/ffffff/000000',
                smlImage: 'http://placehold.it/100x100/ffffff/000000',
                cat: ['all', 'white'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '150px',
                    height: '220px',
                },
                showDetails: false,
            },
            {
                title: 'Image Three',
                location: 'Location Three',
                url: 'https://google.com',
                image: 'http://placehold.it/125x100/ffffff/000000',
                smlImage: 'http://placehold.it/100x100/ffffff/000000',
                cat: ['all', 'white'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '125px',
                    height: '100px',
                },
                showDetails: false,
            },
            {
                title: 'Image Four',
                location: 'Location Four',
                url: 'https://google.com',
                image: 'http://placehold.it/150x150/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '150px',
                    height: '150px',
                },
                showDetails: false,
            },
            {
                title: 'Image Five',
                location: 'Location Five',
                url: 'https://google.com',
                image: 'http://placehold.it/180x150/ffffff/000000',
                smlImage: 'http://placehold.it/100x100/ffffff/000000',
                cat: ['all', 'white'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '180px',
                    height: '150px',
                },
                showDetails: false,
            }, {
                title: 'Image One',
                location: 'Location One',
                url: 'https://google.com',
                image: 'http://placehold.it/200x300/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '200px',
                    height: '300px',
                },
                showDetails: false,
            },
            {
                title: 'Image Two',
                location: 'Location Two',
                url: 'https://google.com',
                image: 'http://placehold.it/250x170/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '250px',
                    height: '170px',
                },
                showDetails: false,
            },
            {
                title: 'Image Three',
                location: 'Location Three',
                url: 'https://google.com',
                image: 'http://placehold.it/150x150/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '150px',
                    height: '150px',
                },
                showDetails: false,
            },
            {
                title: 'Image Four',
                location: 'Location Four',
                url: 'https://google.com',
                image: 'http://placehold.it/450x250/ffffff/000000',
                smlImage: 'http://placehold.it/100x100/ffffff/000000',
                cat: ['all', 'white'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '450px',
                    height: '250px',
                },
                showDetails: false,
            },
            {
                title: 'Image Five',
                location: 'Location Five',
                url: 'https://google.com',
                image: 'http://placehold.it/180x150/000000/ffffff',
                smlImage: 'http://placehold.it/100x100/000000/ffffff',
                cat: ['all', 'black'],
                boxStyles: {
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    width: '180px',
                    height: '150px',
                },
                showDetails: false,
            },
        ],
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