'use strict';

var masonry = void 0;
new Vue({
    el: '#root',
    data: {
        gridToggle: 'List View',
        showOverlay: false,
        showGridView: true,
        showListView: false,
        categories: ['all', 'black', 'white'],
        boxes: dummyBoxes,
        filteredBoxes: []
    },
    mounted: function mounted() {
        var _this = this;

        this.filteredBoxes = this.filterBoxes('all');
        this.setPadding(this.filteredBoxes);
        this.$nextTick(function () {
            this.startMasonry();
        });
        Event.$on('filter-category', function (cat) {
            return _this.showCategory(cat);
        });
        Event.$on('toggle-box', function (box) {
            return _this.toggleDetails(box);
        });
        Event.$on('toggle-grid', function (box) {
            _this.toggleView(box);
        });
    },
    methods: {
        filterBoxes: function filterBoxes(category) {
            return this.boxes.filter(function (b) {
                return b.cat.some(function (c) {
                    return c === category;
                });
            });
        },
        showCategory: function showCategory(category) {
            this.filteredBoxes = this.filterBoxes(category);
            this.$nextTick(function () {
                this.layoutMasonry();
            });
        },
        toggleView: function toggleView() {
            if (this.showGridView) {
                this.showGridView = false;
                this.gridToggle = 'Grid View';
            } else {
                this.showListView = false;
                this.gridToggle = 'List View';
            }
        },
        displayListView: function displayListView() {
            this.showListView = true;
        },
        displayGridView: function displayGridView() {
            this.showGridView = true;
            this.$nextTick(function () {
                this.startMasonry();
            });
        },
        gridFadeEnd: function gridFadeEnd() {
            if (!this.showGridView) {
                this.displayListView();
            }
        },
        listFadeEnd: function listFadeEnd() {
            if (!this.showListView) {
                this.displayGridView();
            }
        },
        toggleDetails: function toggleDetails(box) {
            box.showDetails = !box.showDetails;
            this.showOverlay = box.showDetails;
        },
        setPadding: function setPadding(boxes) {
            boxes.map(function (b) {
                var top = Math.floor(Math.random() * 22 + 8);
                var right = Math.floor(Math.random() * 22 + 8);
                var bottom = Math.floor(Math.random() * 22 + 8);
                var left = Math.floor(Math.random() * 22 + 8);
                var currentWidth = parseInt(b.boxStyles.width);
                var currentHeight = parseInt(b.boxStyles.height);
                b.boxStyles.paddingTop = top + 'px';
                b.boxStyles.paddingRight = right + 'px';
                b.boxStyles.paddingBottom = bottom + 'px';
                b.boxStyles.paddingLeft = left + 'px';
                b.boxStyles.width = currentWidth + left + right + 'px';
                b.boxStyles.height = currentHeight + top + bottom + 'px';
            });
            this.$nextTick(function () {
                this.startMasonry();
            });
        },
        startMasonry: function startMasonry() {
            masonry = $('.box-container').masonry({
                itemSelector: '.box',
                columnWidth: 25
            });
            masonry.masonry('remove', '.box');
        },
        layoutMasonry: function layoutMasonry() {
            masonry.masonry('once', 'removeComplete', function () {
                masonry.masonry('reloadItems');
                masonry.masonry('layout');
            });
            masonry.masonry('remove', '.box');
        }
    }
});