<template>
  <div>
    <div class="menu" @mouseenter="showMenu" @mouseleave="hideMenu">
      Hover over me
      <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div v-if="menuVisible" class="dropdown">
          <!-- Your menu content goes here -->
          Menu Item 1 Menu Item 2 Menu Item 3
        </div>
      </Transition>
    </div>
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

<style>
.menu {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
}

/* 設定動畫持續時間 */
.animate__animated.animate__fadeIn {
  animation-duration: 0.5s;
}

.animate__animated.animate__fadeOut {
  animation-duration: 0.3s;
}
</style>
