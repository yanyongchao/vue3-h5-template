<template>
  <fs-layout>
    <van-card
      v-for="item in list"
      :key="item.id"
      :price="item.discountPrice"
      :desc="item.goodsDesc"
      :title="item.goodsName"
      :thumb="item.goodsImg"
      :origin-price="item.price"
      @click="$router.push({ name: 'GoodsDetail' })"
    />
    <fs-child />
  </fs-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GoodsInteractor from '@/core/interactors/goods'
import { useApi } from '@/hooks/useApi'

export default defineComponent({
  name: 'Goods',
  setup () {
    const { data: list } = useApi(
      GoodsInteractor.getGoodsList,
      {
        params: []
      }
    )

    return {
      list
    }
  }
})
</script>
