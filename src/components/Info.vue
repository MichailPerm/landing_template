<template>
  <div class="info-wrapper">
    <div class="info-container">
      <template v-if="reverse">
        <Typography :content=content :title=title :link=link />
        <img :src="resolve_img_url(imageSrc1)" alt="image1" />
      </template>
      <template v-else>
        <img :src="resolve_img_url(imageSrc1)" alt="image1" />
        <Typography  :content=content :title=title :link=link />
      </template>
    </div>
  </div>
</template>

<script>
  import Typography from "@/components/Typography";
  export default {
    name: "Info",
    components: {Typography},
    props: {
      title: String,
      content: String,
      link: String,
      imageSrc1: String,
      imageSrc2: String,
      reverse: Boolean
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('../assets/', false, /\.png$|\.jpg$/)
        return images("./"+path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-wrapper {
    width: 1403px;
    margin: 0 auto 120px;
    .info-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      & > img {
        width: 675px;
        height: 675px;
        border-radius: 12px;
      }
    }
  }
</style>