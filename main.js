const App = {
    data() {
        return {
            catalog: [],
            page: 'home',
            loginState: 0,
            showCatalog: false,
            logInUp: '',
            catalogPage: {
                category: '',
                subCategory: '',
                manufacturer: '',
                goodsID: [],
            },
            itemPage: {
                id: '',
                name: '',
                price: '',
                img:'',
                description: []
            }
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
            this.catalogPage.category = category
            this.catalogPage.subCategory = subCategory
            this.catalogPage.manufacturer = manufacturer
            this.catalogPage.goodsID = []

            App.catalog.forEach(element => {
                if ((element.category == category) && (element.manufacturer == manufacturer) && (subCategory == undefined)) {
                    this.catalogPage.goodsID.push(element)
                } else if ((element.category == category) && (manufacturer == undefined) && (element.subCategory == subCategory)) {
                    this.catalogPage.goodsID.push(element)
                }
            });
            this.page = 'catalog'
        },
        showItem(id) {
            console.log(id)
            App.catalog.forEach(element => {
                if (element.id == id) {
                    this.itemPage.id = element.id
                    this.itemPage.name = element.name
                    this.itemPage.price = element.price
                    this.itemPage.img = element.img
                    this.itemPage.description = element.description
                }
            })
            this.page = 'item'
        },
        showLoginWindow() {
            this.logInUp = 'login'
        }
    }
}

Vue.createApp(App).mount('body')
fetch('./Data/Catalog.json')
    .then((response) => response.json())
    .then((data) => {
        App.catalog = data.catalog
    })






// showCategory (category, manufacturer, subCategory) {
//     this.catalogPage.category = category
//     this.catalogPage.subCategory = subCategory
//     this.catalogPage.manufacturer = manufacturer
//     this.catalogPage.goodsID = []
    
    
    
//     if (this.catalog == {}) {}
//     fetch('./Data/Catalog.json')
//         .then((response) => response.json())
//         .then((data) => {
            
//             console.log (this.catalogPage.category,  this.catalogPage.subCategory,  this.catalogPage.manufacturer)
//             data.catalog.forEach(element => {
//                 if ((element.category == category) && (element.manufacturer == manufacturer) && (subCategory == undefined)) {
//                     this.catalogPage.goodsID.push(element)
//                     console.log(element)
//                 } else if ((element.category == category) && (manufacturer == undefined) && (element.subCategory == subCategory)) {
//                     this.catalogPage.goodsID.push(element)
//                     console.log(element)
//                 }
//             });
//             this.page = 'catalog'
//         })
// },