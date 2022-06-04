<template>

 <div @click="esGanador()" v-bind:style="{backgroundColor:this.color}" class="square"></div>

</template>

<script>



  export default  {
    name: 'src-components-cuadrado',
    props: ['color', 'colorGanador'],
    mounted () {
      
    },
    data () {
      return {
          ganador : Boolean
      }
    },
    methods: {

      esGanador() {
         this.color == this.colorGanador ? this.ganador = true : this.ganador = false
         this.$emit('esGanador', this.ganador)
         this.$parent.esGanador()
         console.log(this.ganador);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrado {

  }

  .square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
</style>
