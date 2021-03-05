<template>
  <router-view v-slot="{ Component }">
    <template v-if="pageAnimation">
      <transition name="slide">
        <component class="fs-child" :is="Component" />
      </transition>
    </template>
    <template v-else>
      <component class="fs-child" :is="Component" />
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LocalConfig from '@/config.json'

export default defineComponent({
  name: 'FsChild',
  setup () {
    const pageAnimation = ref<boolean>(LocalConfig.PageAnimation)

    return {
      pageAnimation
    }
  }
})
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
