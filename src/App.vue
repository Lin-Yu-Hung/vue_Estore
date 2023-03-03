<template>
  <RouterView />
  <Loading />
</template>
<script>
import Loading from "./components/Loading.vue";
export default {
  components: {
    Loading,
  },
};
</script>
