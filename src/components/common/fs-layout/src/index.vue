<template>
  <div class="fs-layout">
    <div class="fs-header">
      <slot name="header">
        <van-nav-bar
          title="标题"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </slot>
    </div>
    <div class="fs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FsLayout',
  setup () {
    const router = useRouter()
    const onClickLeft = () => {
      router.back()
    }
    return {
      onClickLeft
    }
  }
})
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
