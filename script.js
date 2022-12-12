const  {createApp} = Vue
createApp({
    data(){
        return{
            message: 'Hello Vue3',
            image:'./img/vue.png' ,
        }
    }
}).mount('#app')
