<template>
  <div
    @click="changeColor"
    class="color-box"
    :style="{
      background: `${backgroundColor}`
    }"
  />
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  },
  methods: {
    changeColor() {
      this.$emit('color-clicked')
    }
  }
  // methods: {
  //   onClicked() {
  //     // console.log(this)
  //     this.$store.commit('changeColor', {
  //       // index: this.index
  //     })
  //   }
  // }
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
