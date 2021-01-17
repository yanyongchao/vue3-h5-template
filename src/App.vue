<template>
  <router-view v-slot="{ Component }">
    <transition :name="transition">
      <component class="child-view" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'App',
  computed: {
    ...mapState({
      routerDirection: (state: any) => state.router.routerDirection
    }),
    transition () {
      const routerDirection: any = this.routerDirection
      if (!routerDirection) {
        return 'slide-normal'
      }
      return `slide-${routerDirection}`
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
  height: 100%;
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
