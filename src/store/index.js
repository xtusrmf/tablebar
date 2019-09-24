import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        counter:11,
        info:[
            {id:11,name:"james",age:23},
            {id:12,name:"kebe",age:25},
            {id:13,name:"kebehel",age:21},
            {id:14,name:"juanjuan",age:23},
        ]
    },
    mutations:{
        increment(state){
            state.counter++
        }
    },
    getters:{
        infoNum(state){
            return state.info.filter(item => item.age >21)
        },
        infoName:state => state.info.filter(item => item.name == "kebe")
    },
    actions:{
        increment(context){
            context.commit("increment")
            console.log("ooooo")
        }
    }
})
export default store