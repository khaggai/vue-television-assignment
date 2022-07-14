//How to define the data property of the vue application instance
const television = {
    data(){
        return{
            on: true,
            off: false,
            channels:[],
            currChannel: 1
        }
    },

    methods: {
        switch_on_off: function(){
            let temp = this.on;
            this.on = this.off;
            this.off = temp;

        },

         nextChannel: function(){
            if(this.currChannel==4){
                this.currChannel = 1;
            }
            else{
                this.currChannel= this.currChannel + 1;
            }
        },

         prevChannel: function(){
            if(this.currChannel==1){
                this.currChannel = 4;
            }
            else{
                this.currChannel= this.currChannel - 1;
            }
         }
    }
}
const app = Vue.createApp(television);
app.mount('#app');