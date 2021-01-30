<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component class="fs-child" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FsChild'
})
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
