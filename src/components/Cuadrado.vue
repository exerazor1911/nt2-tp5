<template>

 <div v-show="mostrar" @click="esGanador()" v-bind:style="{backgroundColor:this.color}" class="square"></div>
<!-- v-show="mostrar" -->
</template>

<script>



  export default  {
    name: 'src-components-cuadrado',
    props: ['color', 'colorGanador'],
    mounted () {
      
    },
    data () {
      return {
          ganador : Boolean,
          mostrar: true
      }
    },
    methods: {

      esGanador() {
         this.color == this.colorGanador ? this.ganador = true : this.ganador = false 
         this.$emit('esGanador', this.ganador)
         this.$parent.esGanador()
        //  this.setEstilo()
        // 
        //  console.log(this.ganador);
      },

      setEstilo() {
        if (this.color != this.colorGanador) {
         this.mostrar = false
        }
      },

      mostrarse() {
        this.mostrar = true
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
