<template>
  <div
    @click="colorClicked"
    class="color-box"
    :style="{
      background: `${backgroundColor}`
    }"
  />
</template>

<script>
export default {
  // props: {
  //   backgroundColor: {
  //     type: String,
  //     required: true
  //   }
  // },
  methods: {
    colorClicked() {
      this.$emit('color-clicked')
    }
  }
}
</script>

<style>
.color-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: move;
  z-index: 10000
}

</style>
