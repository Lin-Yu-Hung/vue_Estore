<template>
  <Loading :active="loadingStatus"></Loading>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import loadingStore from "@/stores/loading";
import { storeToRefs } from "pinia";
export default {
  components: {
    Loading,
  },
  setup() {
    const loading = loadingStore();
    const { loadingStatus } = storeToRefs(loading);

    return {
      loadingStatus,
    };
  },
};
</script>
