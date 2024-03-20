<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination mb-0">
      <!-- <li
        class="page-item"
        :class="{ invisible: nowPage === 1 }"
        @click="changePage(nowPage - 1)"
      >
        <a class="page-link">上一頁</a>
      </li> -->
      <li
        class="page-item"
        :class="{ active: nowPage === item }"
        v-for="item in pageCount"
        :key="item"
        @click="changePage(item)"
      >
        <a class="page-link">{{ item }}</a>
      </li>
      <!-- <li
        class="page-item"
        :class="{ invisible: nowPage === pageCount }"
        @click="changePage(nowPage + 1)"
      >
        <a class="page-link">下一頁</a>
      </li> -->
    </ul>
  </nav>
</template>
<script>
import { ref, computed, inject } from "vue";
export default {
  props: {
    data: { type: Array },
    showItemCount: { type: Number, default: 0 },
  },
  emits: ["changePage"],
  setup(props, context) {
    const { emit } = context;
    const nowPage = ref(1);
    const pageItemCount = inject("pageItemCount");
    const showItemCount = props.showItemCount
      ? props.showItemCount
      : pageItemCount.value;
    const pageCount = computed(() => {
      return Math.ceil(props.data.length / showItemCount);
    });
    const changePage = (page) => {
      if (page === nowPage.value) return;
      nowPage.value = page;
      emit("changePage", page);
    };
    return {
      nowPage,
      pageCount,
      changePage,
    };
  },
};
</script>
<style lang="scss" scoped>
.page-item {
  cursor: pointer;
  user-select: none;
  &.active {
    .page-link {
      background-color: gray !important;
      border-color: gray;
    }
  }
}
</style>
