<template>
  <div id="app">
    <div id="header">
      <h1>The Great </h1>
      <span>{{colorToDisplay}}</span>
      <h1>Guessing Game</h1>
    </div>
    <NavBar :result="result"/>
    <!--  -->
    <router-view ref="myChild" @result="result=$event"  @colorToDisplay="colorToDisplay=$event"></router-view>
    <!-- <button @click="$refs.myChild.restart()">boton restart</button> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data (){
    return {

    colorToDisplay: "",
    result: '',
    

    }
    
  },
  components: {
    NavBar,
  },
  methods: {
    restart() {
        this.$refs.myChild.restart()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header {
  transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}
</style>
