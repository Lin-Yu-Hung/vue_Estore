<template>
  <font-awesome-icon :icon="icon" role="button" @click="toggleIcon" />
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    sortList: { type: Array, default: [] },
    sortItem: { type: String, default: "" },
  },
  setup(props, context) {
    const { emit } = context;
    const icon = ref("fa-arrow-up-wide-short");
    const toggleIcon = () => {
      icon.value =
        icon.value === "fa-arrow-up-wide-short"
          ? "fa-arrow-down-short-wide"
          : "fa-arrow-up-wide-short";
      const sortType = icon.value === "fa-arrow-up-wide-short" ? "up" : "down";
      if (props.sortItem) {
        props.sortList.sort((a, b) => {
          return sortType === "up"
            ? b[props.sortItem] - a[props.sortItem]
            : a[props.sortItem] - b[props.sortItem];
        });
      }
    };
    return {
      icon,
      toggleIcon,
    };
  },
};
</script>
