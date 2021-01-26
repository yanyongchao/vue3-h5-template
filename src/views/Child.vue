<template>
  <div class="page3">
    child
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const b = inject('pageStack')

    console.log('xx', (b as any).getStack())
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.page3 {
  color: red;
  font-size: 20px;
}
</style>
