<template>
  <div>
    <div id="container" v-for="(color,index) in colors" :key="index">
        <Cuadrado :colorGanador="pickedColor" :color="color" @esGanador="winner=$event"/>
    </div>
</div>

</template>

<script>
import Cuadrado from './Cuadrado.vue'

  export default  {
    name: 'src-components-hard',
    props: [],
    components: {
      Cuadrado
    },
    mounted () {
      this.restart()
    },
    data () {
      return {
        colors : [],
        quantity : 6,
        pickedColor: String,
        result: '',
        winner : Boolean
      }
    },
    methods: {
      fillColors() {
        this.colors = this.createNewColors(this.quantity)
      },

      createNewColors(quantity) {
        let arr = []
        for(let i = 0; i < quantity; i++){
          arr.push(this.createRandomStringColor())
        }
        return arr
      },

      createRandomStringColor(){
      let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;

      return newColor;
    },

    randomInt() {
      return Math.floor(Math.random() * 256)
    },

    pickColor() {
      return Math.floor(Math.random() * this.quantity );
    },
    
    fillPickedColor(){
        this.pickedColor = this.colors[this.pickColor()]
      },
      
      corroborar() {
        console.log("corroborar");
      if (this.color === this.pickedColor) {
        this.result = "You Picked Right!"
      } else {
        this.result = "Try Again!"
      }
      this.$emit('result', this.result)
    },

    esGanador() {
      console.log('corroborar');
      if (this.winner) {
        this.result = "You Picked Right!"
      } else {
        this.result = "Try Again!"
      }
      this.$emit('result', this.result)
      console.log(this.result);
    },

    restart() {
      this.result = ''
      this.$emit('result', this.result)
      this.fillColors()
      this.fillPickedColor()
      this.$emit('colorToDisplay', this.pickedColor)
    }


    },
    computed: {
     
    }
}


</script>

<style scoped lang="css">
  .src-components-hard {

  }

  #container {
	margin: 20px auto;
	max-width: 600px;
  }
</style>
