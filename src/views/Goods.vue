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
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import GoodsInteractor from '@/core/interactors/quote'
import { IGoods } from '@/typings/goods'

export default defineComponent({
  name: 'Goods',
  setup () {
    const data = reactive({
      list: [] as Array<IGoods>
    })
    onMounted(async () => {
      try {
        const list: Array<IGoods> = await GoodsInteractor.getQuoteList()
        data.list = list
      } catch (err) {
        console.log(err)
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
