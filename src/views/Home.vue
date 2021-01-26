<template>
  <fs-layout>
    <div class="home">{{routerDir}}</div>
    <button @click="$router.push({ name: 'About' })">去page2</button>
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useToggle } from '@/hooks/useToogle'
import { PageStack } from '@/plugins/vuePageStack'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const [isShow, handleToggle] = useToggle()
    const b = inject('pageStack') as PageStack
    const route = useRoute()
    const routerDir = route.params.routerDir
    return {
      isShow,
      routerDir,
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
