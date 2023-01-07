const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            name: "Deathly Hollows",
            author: "J.K. Rowling",
            age:45
        }
    },
    //template:`<h2> I am the Template</h2>`,
    methods: {
        changeTitle() {
            this.name="Goblet of Fire"
        },
        toggleshowBooks(){
            this.showBooks= !this.showBooks
        }
    },
})
app.mount('#app')