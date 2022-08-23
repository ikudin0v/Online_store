const App = {
    data() {
        return {
            page: 'main',
            loginState: 0,
            showCatalog: 0,
        }
    },
    methods: {
        showlog() {
            console.log(1243234345)
        }
    }
}

Vue.createApp(App).mount('#main')
Vue.createApp(App).mount('#navBar')