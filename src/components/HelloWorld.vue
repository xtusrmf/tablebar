<template>
  <div class="hello">
    counter:{{$store.state.counter}}
    <button @click="powerClick">power</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  methods:{
    powerClick(){
      this.$store.state.counter += 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
