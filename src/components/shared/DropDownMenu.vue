<template>
  <div class="menu py-2 py-md-4" @mouseenter="showMenu" @mouseleave="hideMenu">
    <slot name="header"></slot>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="dropdown shadow card" v-if="menuVisible">
        <slot name="menu"></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuVisible = ref(false);
    const showMenu = () => {
      menuVisible.value = true;
    };

    const hideMenu = () => {
      menuVisible.value = false;
    };

    return {
      menuVisible,
      showMenu,
      hideMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  z-index: 100;
  cursor: pointer;
  position: relative;
}

.dropdown {
  min-width: 120px;
  position: absolute;
  top: 100%;
  right: 0;
}

/* 設定動畫持續時間 */
.animate__animated.animate__fadeIn {
  animation-duration: 0.5s;
}

.animate__animated.animate__fadeOut {
  animation-duration: 0.3s;
}
</style>
