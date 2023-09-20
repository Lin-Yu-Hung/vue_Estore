<template>
  <p
    class="fixed-width-80 status-text text-center"
    :class="[
      type === 'up' ? 'bg-success text-green' : 'bg-danger-light text-danger',
    ]"
  >
    <font-awesome-icon v-if="type === 'up'" icon="fa-arrow-up" role="button" />
    <font-awesome-icon v-else icon="fa-arrow-down" role="button" />
    {{ value }}{{ format }}
  </p>
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
