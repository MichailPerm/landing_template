<template>
  <div class="typo-wrapper">
    <span class="info-header" v-bind:class="{big: bigHeader}">
      {{ title }}
    </span>
    <span class="info-content">
      {{ content }}
    </span>
    <span class="info-link">
      {{ link }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Typography",
  props: {
    title: String,
    content: String,
    link: String,
    bigHeader: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .typo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 625px;
    height: 333px;
    box-sizing: border-box;
    justify-content: space-between;
    & > .info-header {
      @include font-title-h-3;
      text-align: left;
      color: $black;
    }

    & > .big {
      @include font-title-h-2;
    }

    & > .info-content {
      @include font-text-large-text;
      color: $black;
      text-align: left;
    }

    & > .info-link {
      @include font-link-active;
      color: $primary;
    }
  }
</style>