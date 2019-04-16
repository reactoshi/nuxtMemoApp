<template>
  <div
    :style="{
      top: `${posY}px`,
      left: `${posX}px`,
    }"
    class="memo"
  >
    <drag-handler
      @dragStart="$emit('dragStart', $event)"
    />
    <remove-btn @remove="$store.commit('removeMemo', index)" />
    <text-box
      :text="text"
      @inputed="onInputed"
    />
    <color-box
    v-for="(i) in backgroundColorList.length"
    @color-clicked=onClicked(i)
    :key="i"
    :index="i"
    :style="{
      background: `${backgroundColorList[i-1]}`,
      left: `${i*40-40}px`
    }"
    />
  </div>
</template>

<script>
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'
import RemoveBtn from '~/components/RemoveBtn.vue'
import ColorBox from '~/components/ColorBox.vue'

export default {
  components: {
    DragHandler,
    TextBox,
    RemoveBtn,
    ColorBox
  },
  props: {
    posX: {
      type: Number,
      required: true
    },
    posY: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      backgroundColorList: ['yellow', 'green', 'blue', 'pink', 'orange']
    }
  },
  methods: {
    onInputed(text) {
      this.$store.commit('setText', {
        text,
        index: this.index
      })
    },
    onClicked(i) {
      this.$store.commit('changeColor', i)
    }
  }
}

</script>

<style scoped>
.memo {
  position: fixed;
  width: 200px;
  height: 300px;
  background: yellow;
  /* background: center/cover url('~assets/memo.jpg'); */
}
</style>
