<template>
  <div class="d-flex" @click="toggleIcon">
    <slot name="title"></slot>
    <font-awesome-icon
      data-bs-toggle="collapse"
      :data-bs-target="`#${collapseId}`"
      aria-expanded="true"
      :aria-controls="`${collapseId}`"
      class="text-secondary m-0"
      :icon="iconName"
      role="button"
    />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    show: { type: Boolean, default: false },
    collapseId: { type: String },
  },
  setup(props) {
    const iconName = ref(props.show ? "fa-chevron-up" : "fa-chevron-down");
    let canBeChange = true;
    const toggleIcon = () => {
      if (!canBeChange) return;
      canBeChange = false;
      iconName.value =
        iconName.value === "fa-chevron-up"
          ? "fa-chevron-down"
          : "fa-chevron-up";
      setTimeout(() => {
        canBeChange = true;
      }, 350);
    };
    return {
      iconName,
      toggleIcon,
      props,
    };
  },
};
</script>
<style lang=""></style>
