<template>
  <fs-layout>
    <div class="home">{{routerDir}}</div>
    <button @click="$router.push({ name: 'About' })">去page2</button>
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue'
import { useToggle } from '@/hooks/useToogle'
import { useRoute } from 'vue-router'
import quoteInteractor from '@/core/interactors/quote'

export default defineComponent({
  name: 'Home',
  setup () {
    const [isShow, handleToggle] = useToggle()
    const route = useRoute()
    const routerDir = route.params.routerDir
    onMounted(async () => {
      try {
        const list = await quoteInteractor.getQuoteList()
      } catch (err) {
        console.log('lll', err)
      }
    })
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
