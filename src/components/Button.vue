<template>
  <button
      class="base-button"
      onclick=""
      v-bind:class="{small: small}"
  >
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    small: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .base-button {
    @include font-button;
    padding: 18px 41px;
    color: $white;
    border-radius: 8px;
    border: none;
    background: $primary;
    &:hover {
      background: $secondary;
    }
  }

  .small {
    @include font-text-small-text;
    background: $white;
    color: $primary;
    border: solid 2px $secondary;
    border-radius: 4px;
    padding: 9.5px 18px;
    &:hover {
      background: $white;
    }
  }
</style>
