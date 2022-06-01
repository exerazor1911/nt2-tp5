<template>

  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">New Colors</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/easy">
        <a class="nav-link" href="#">Easy</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hard">
        <a class="nav-link" href="#">Hard</a>
        </router-link>
      </li>
      <li class="nav-item">
        <span class="nav-link" href="#">{{result || ''}}</span>
      </li>
    </ul>
  </div>
</nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: ['result'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
