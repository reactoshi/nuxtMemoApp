<template>
  <div
    class="remove-button"
    @click="$emit('remove')"
  >×</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.remove-button {
  position: absolute;
  top: -10px;
  right: 0px;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
}
</style>
