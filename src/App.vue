<template>
  <font-awesome-icon
    icon="fa-arrow-up"
    role="button"
    class="toTop"
    v-if="showStatus"
    @click="toTop"
  />
  <RouterView />
  <Loading />
</template>
<script>
import { ref } from "vue";
import Loading from "./components/Loading.vue";
export default {
  components: {
    Loading,
  },
  setup(props) {
    const showStatus = ref(false);
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        showStatus.value = true;
      } else {
        showStatus.value = false;
      }
    });
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 平滑滾動效果
      });
    };
    return { toTop, showStatus };
  },
};
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  right: 2.5%;
  bottom: 15%;
  z-index: 1000;
  border-radius: 50%;
  padding: 0.85rem 1rem;
  background-color: gray;
  opacity: 0.4;
  color: white;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 577px) {
    bottom: 5%;
  }
}
</style>
