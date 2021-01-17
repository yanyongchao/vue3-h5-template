<template>
  <div class="page3">
    page3
    <button @click="$router.go(-2)">返回page1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Page3'
})
</script>

<style lang="scss" scoped>
.page3 {
  color: red;
  font-size: 20px;
}
</style>
