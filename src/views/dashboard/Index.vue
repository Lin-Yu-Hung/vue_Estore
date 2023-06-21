<template>
  <div class="d-flex w-100">
    <div class="dashboard-menu" id="dashboard-menu"></div>
    <div class="dashboard-content-layout">
      <DashboardContent />
    </div>
  </div>
</template>
<script>
import DashboardContent from "@/components/dashboard/DashboardContent.vue";

export default {
  components: {
    DashboardContent,
  },
};
</script>
