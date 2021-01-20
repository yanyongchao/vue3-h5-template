<template>
  <div class="home">
    <button @click="$router.push({ name: 'About' })">去page2</button>
    <p>{{isShow ? 'ss' : 'mm'}}</p>
    <button @click="handleToggle">toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '@/hooks/useToogle'

export default defineComponent({
  name: 'Home',
  setup () {
    const [isShow, handleToggle] = useToggle()
    return {
      isShow,
      handleToggle
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  color: red;
  font-size: 20px;
}
</style>
