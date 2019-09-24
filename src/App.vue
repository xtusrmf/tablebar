<template>
  <div id="app">
      <h3>{{$store.state.counter}}</h3>
      <button v-on:click="addcounter">counter+</button>
      <h3>getters---------</h3>
       总人数：{{$store.getters.infoNum}}<br><br>
      所有人的姓名：{{$store.getters.infoName}}

      <br>
      <button @click="actionClick">acction+</button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from './store/index'

export default {
  name: 'app',
  data(){
    return{
      info:[
        {id:11,name:"james",age:23},
        {id:12,name:"kebe",age:25},
        {id:13,name:"keli",age:21},

      ]
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    addcounter(){
      store.commit("increment")
    },
      actionClick(){
        store.dispatch("increment")
    }
  }
}
</script>

<style>
#app{
    color:greenyellow;
}
</style>
