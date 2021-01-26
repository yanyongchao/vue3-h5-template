<template>
  <div class="about" style="color: red;">
    <h1>This is an about page</h1>
    <div>page2</div>
    <button @click="$router.push({ name: 'Page3' })">去page3</button>
    <button @click="$router.go(-1)">返回page1</button>
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
