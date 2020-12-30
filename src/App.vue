<template>
  <div id="app">
    <Button msg="Get In Touch" small/>
  </div>
</template>

<script>
  import Button from './components/Button.vue'

  export default {
    name: 'App',
    components: {
      Button
    }
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
