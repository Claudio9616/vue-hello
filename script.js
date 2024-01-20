const {createApp} = Vue 
const app = createApp({
    name: 'Primo Vue',
    data(){
        return {
            message: 'HELLO THERE',
            pic: 'https://tse3.mm.bing.net/th?id=OIP.vMVvfd8CSp-m7Gl9wzm85gHaHa&pid=Api&P=0&h=180'
        }
    },
    methods: {
        myfunction() {
            console.log('ciao Vue')   
        }
    }
})
app.mount('#root')