<template>
  <div
    :style="{
      top: `${posY}px`,
      left: `${posX}px`
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
    <background-box />
  </div>
</template>

<script>
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'
import RemoveBtn from '~/components/RemoveBtn.vue'
import BackgroundBox from '~/components/BackgroundBox.vue'

export default {
  components: {
    DragHandler,
    TextBox,
    RemoveBtn,
    BackgroundBox
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
  methods: {
    onInputed(text) {
      this.$store.commit('setText', {
        text,
        index: this.index
      })
    }
  }
}

// new Vue({
//   el: ".col-md-10",
//   data: {a: "#6B8CFF" , b: 'red'},
// })

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
