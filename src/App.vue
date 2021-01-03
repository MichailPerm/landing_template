<template>
  <div id="app">
    <Header />
    <Info
        title="The best design for your studio website"
        content="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat."
        link="Experienced team"
        imageSrc1="left_player.png"
    />
    <Info
        title="The best design for your studio website"
        content="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat."
        link="Experienced team"
        imageSrc1="player_right.png"
        reverse
    />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer';
  import Info from "./components/Info";

  export default {
    name: 'App',
    components: {
      Info,
      Header,
      Footer
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
