<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component class="child-view" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, inject } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { IStore } from '@/typings/store'
import { PageStack, PAGE_STACK_CONFIG } from '@/plugins/vuePageStack'
import LocalConfig from '@/config.json'

export default defineComponent({
  name: 'App',
  setup () {
    // const store = useStore<IStore>()
    // const routerDirection = computed(() => store.state.router.routerDirection)
    // const transitionName = computed(() => {
    //   if (!routerDirection.value) {
    //     return 'slide-normal'
    //   }
    //   return `slide-${routerDirection.value}`
    // })
    const route = useRoute()
    const transitionName = ref('slide-normal')
    const pageStack = inject('pageStack') as PageStack
    if (LocalConfig.PageAnimation) {
      watch(route, (newRoute) => {
        const routerDir = newRoute.params.routerDir as string
        if (pageStack.getStack().length <= 1 && routerDir === PAGE_STACK_CONFIG.forwardName) {
          transitionName.value = 'slide-normal'
          return
        }
        transitionName.value = 'slide-' + routerDir
      })
    }
    return {
      transitionName
    }
  }
})
</script>

<style lang="scss">
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #fff;
  transition: all .3s;
  backface-visibility: hidden;
}
.slide-forward-enter-from,
.slide-back-leave-active {
  opacity: 0;
  transform: translate3d(100%,0,0);
}

.slide-forward-leave-active,
.slide-back-enter-from {
  opacity: 0;
  transform: translate3d(-100%,0,0);
}

.slide-normal {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.slide-normal-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0,0);
}
</style>
