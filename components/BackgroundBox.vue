<template>
  <div
      class="background-box"
  >

  <color-box
  v-for="(i) in 5"
  @color-clicked=onClicked(i-1)
  :key="i"
  :index="i"
  :style="{
    background: `${backgroundColor[i-1]}`,
    left: `${i*40-40}px`
  }"
  />
  </div>

</template>

<script>
import ColorBox from '~/components/ColorBox.vue'
export default {
  components: {
    ColorBox
  },
  // props: {
  //   backgroundColor: {
  //     type: String,
  //     required: true
  //   }
  // },
  data: function () {
    return {
      backgroundColor: ['red', 'green', 'blue', 'pink', 'orange']
    }
  },
  methods: {
    onClicked(i) {
      console.log(this.$data.backgroundColor[i])
      this.$store.commit('changeColor', {
        // index: this.index
      })
    }
  }

}
</script>

<style>
.background-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 1000;
  border-top: 1px solid grey;
}

</style>
