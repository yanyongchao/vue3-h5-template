<template>
  <fs-layout>
    GoodsDetail
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'GoodsDetail',
  setup () {
    onMounted(() => {
      throw Error('我错了')
    })
    return {
    }
  }
})
</script>
