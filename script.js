const {createApp} = Vue 
const app = createApp({
    name: 'Primo Vue',
    data(){
        return {
            message: 'HELLO THERE',
            text: 'GENERAL KENOBI',
            img: 'https://tse3.mm.bing.net/th?id=OIP.EwP5-UFEPz9wM7Ubkun2kAHaEo&pid=Api&P=0&h=180',
            pic: 'https://tse3.mm.bing.net/th?id=OIP.vMVvfd8CSp-m7Gl9wzm85gHaHa&pid=Api&P=0&h=180'
        }
    },
    methods: {
        myfunction() {
            console.log('ciao Vue')   
            this.text
        }
    }
})
app.mount('#root')