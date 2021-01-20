<template>
  <fs-layout>
    <div class="home">我欲成风</div>
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FsLayout from '@/components/common/fs-layout/index.vue'
import { useToggle } from '@/hooks/useToogle'

export default defineComponent({
  name: 'Home',
  components: {
    FsLayout
  },
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
  // font-size: 20px;
}
</style>
