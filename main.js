const App = {
    data() {
        return {
            page: 'catalog',
            loginState: 0,
            showCatalog: false,
            catalogPage: {
                category: '',
                subCategory: '',
                quantity: 0,
                goods: [],
            },
        }
    },
    methods: {
        showlog(a) {
            console.log(a)
        },
        changePage(newPage) {
            console.log(newPage)
            this.page = newPage
            console.log(this.page)
        },
        showCategory (category, manufacturer, subCategory) {
            this.catalogPage.category = ''
            this.catalogPage.subCategory = ''
            this.catalogPage.quantity = 0
            this.catalogPage.goods = []
            fetch('./Data/Catalog.json')
                .then((response) => response.json())
                .then((data) => {
                    this.catalogPage.category = category
                    this.catalogPage.subCategory = subCategory
                    data.catalog.forEach(element => {
                        if ((element.name != '') && (element.category == category) && (element.manufacturer == manufacturer)) {
                            this.catalogPage.goods.push(element.name)
                        }
                    });
                    console.log(this.catalogPage.goods)
                })
        }
    }
}

Vue.createApp(App).mount('body')
// Vue.createApp(App).mount('#navBar')