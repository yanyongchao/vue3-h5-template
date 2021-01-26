<template>
  <fs-layout>
    <div class="home">我欲成风</div>
    <button @click="$router.push({ name: 'About' })">去page2</button>
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useToggle } from '@/hooks/useToogle'
import { PageStack } from '@/plugins/vuePageStack'

export default defineComponent({
  name: 'Home',
  setup () {
    const [isShow, handleToggle] = useToggle()
    const b = inject('pageStack') as PageStack

    console.log('xx', b.getStack())
    return {
      isShow,
      handleToggle
    }
  },
  activated () {
    console.log('xxx')
  }
})
</script>

<style lang="scss" scoped>
.home {
  color: red;
  // font-size: 20px;
}
</style>
