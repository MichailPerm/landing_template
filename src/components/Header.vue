<template>
  <div class="header-container">
    <img src="@/assets/Space.png" alt="logo">
    <div class="menu">
      <a href="#" class="menu-item">Home</a>
      <a href="#" class="menu-item">Templates</a>
      <a href="#" class="menu-item">Price</a>
      <a href="#" class="menu-item">Help</a>
      <Button msg="Get In Touch" small/>
    </div>
  </div>
</template>

<script>
    import Button from './Button.vue'
  export default {
    name: "Header",
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .header-container {
    width: 100%;
    max-width: 1920px;
    padding: 37px 41.27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > .menu {
      & > .menu-item {
        @include font-link-not-active;
        text-decoration: none;
        color: $grey;
        margin-right: 48px;
      }
    }
  }
</style>