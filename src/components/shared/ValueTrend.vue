<template>
  <div
    class="fixed-width-80 status-text text-center test"
    :class="[
      type === 'up' ? 'bg-success text-green' : 'bg-danger-light text-danger',
    ]"
  >
    <p class="text">
      <font-awesome-icon
        v-if="type === 'up'"
        icon="fa-arrow-up"
        role="button"
      />
      <font-awesome-icon v-else icon="fa-arrow-down" role="button" />

      {{ value }}{{ format }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    type: { type: String },
    value: { type: String },
    format: { type: String, default: "%" },
  },
};
</script>

<style lang="scss" scoped>
.test {
  position: relative;
  p {
    margin-bottom: 0;
    position: absolute;
    top: 15%;
    left: 12%;
  }
}
</style>
