<template>
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-top-first">
        <img src="@/assets/Space_white.png" alt="logo">
        <div>
          The best design for your web studio website. Vitae nulla nunc euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod vel pretium tellus accumsan semper.
        </div>
      </div>
      <div class="footer-menu">
        <p>Pages</p>
        <div class="menu-box">
          <p>Templates</p>
          <p>Price</p>
          <p>Help</p>
          <p>Contact</p>
        </div>
      </div>
      <div class="footer-menu">
        <p>Demos</p>
        <div class="menu-box">
          <p>Dark theme</p>
          <p>Light theme</p>
          <p>Classic theme</p>
        </div>
      </div>
      <div class="footer-menu">
        <p>Resources</p>
        <div class="menu-box">
          <p>Documentation</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2019-2020 All Rights Reserved.</p>
      <a>Terms of Service</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  .footer-container {
    display: flex;
    padding: 47px 47px 0 47px;
    box-sizing: border-box;
    flex-direction: column;;
    width: 100%;
    background: $black;
    .footer-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 224px;
      & > .footer-menu {
        @include font-text-small-text;
        align-items: baseline;
        display: flex;
        flex-direction: column;
        & > p {
          margin: 0 0 51px 0;
          color: rgba(255, 255, 255, 0.5);
        }
        & > .menu-box {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          color: $white;
          & > p {
            margin: 0;
            line-height: 32px;
          }
        }
      }
      & > .footer-top-first {
        flex-basis: 40%;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        & > img {
          margin-bottom: 40px;
        }
        & > div {
          display: flex;
          justify-content: left;
          margin: 0 0 100px 0;
          text-align: left;
          @include font-text-medium-text;
          letter-spacing: -2%;
          color: rgba(255,255,255,0.5);
        }
      }
    }
    & > .footer-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      margin: 0 224px;
      & > p {
        @include font-text-small-text;
        color: rgba(255,255,255,0.5);
        margin: 32px 0 27px;
      }
      & > a {
        @include font-text-small-text;
        color: $white;
        text-decoration: none;
      }
    }
  }
</style>