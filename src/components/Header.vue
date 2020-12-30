<template>
  <div class="header-container">
    <div class="header-wrapper">
      <img src="@/assets/Space.png" alt="logo">
      <div class="menu">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Templates</a>
        <a href="#" class="menu-item">Price</a>
        <a href="#" class="menu-item">Help</a>
        <Button msg="Get In Touch" small/>
      </div>
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
    box-sizing: border-box;
    padding: 37px 41.27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > .header-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      & > img {
        height: 28.37px;
      }
      & > .menu {
        & > .menu-item {
          @include font-link-not-active;
          text-decoration: none;
          color: $grey;
          margin-right: 48px;
        }
      }
    }
  }
</style>