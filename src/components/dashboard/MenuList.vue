<template>
  <slot name="menu"></slot>
</template>
<script>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { bsCollapse } from "@/methods/bootstrap.js";

export default {
  setup() {
    const route = useRoute();
    const collapseMap = {};
    const preCollapse = ref(null);
    watch(
      () => route.path,
      (value) => {
        setActivePage();
      }
    );

    const setOtherCollapse = (status, array = []) => {
      if (array.length > 0) {
        for (const key in collapseMap) {
          if (!array.includes(key)) {
            // 操作除了自身外的collapse
            collapseMap[key][status]();
          }
        }
      } else {
        for (const key in collapseMap) {
          // 操作所有collapse
          collapseMap[key][status]();
        }
      }
    };
    const setActivePage = async () => {
      const dashboardPage = route.fullPath.includes("/dashboard"); // 因商品頁面分類項目需等待api回傳時間。
      // 尋找active頁面
      await nextTick();
      setTimeout(
        async () => {
          const activeElement = document.querySelectorAll(
            ".router-link-active"
          );
          if (!activeElement.length === 0) return;
          const liElementList = Array.from(activeElement).map(
            (el) => el.parentElement
          );
          const condition = liElementList.every((el) =>
            el.classList.contains("collapse-item")
          );
          const removeDropdownStatus = (array) => {
            // 移除所有dorpDown狀態
            array.forEach((el) => {
              el.classList.remove("show");
              el.classList.remove("active");
            });
          };
          if (condition) {
            const liParentIdList = liElementList.map((el) =>
              el.getAttribute("parentId")
            );

            if (preCollapse.value !== liParentIdList[0]) {
              preCollapse.value = liParentIdList[0];
              // 選擇了其他下拉群組
              const dropdownTitle =
                document.querySelectorAll(".dropdown-title");
              const notCurrentDropDown = Array.from(dropdownTitle).filter(
                (el) =>
                  !liParentIdList.includes(el.getAttribute("aria-controls"))
              );
              removeDropdownStatus(notCurrentDropDown); // 將不是當前所選擇的下拉選單關閉狀態
              const parentCollapseList = liParentIdList.map((id) => {
                return document.querySelector(
                  // 透過parentId取得最上層的collapse元素
                  `[aria-controls=${id}]`
                );
              });
              setOtherCollapse("hide", liParentIdList);
              // 添加顯示樣式
              await nextTick();
              setTimeout(() => {
                liParentIdList.forEach((id) => collapseMap[id].show());
                parentCollapseList.forEach((el) => {
                  el.classList.add("active");
                  el.classList.add("show");
                });
              }, 100);
            }
          } else {
            const dropdownTitle = document.querySelectorAll(".dropdown-title");
            removeDropdownStatus(dropdownTitle);
            setOtherCollapse("hide");
            preCollapse.value = null;
          }
        },
        dashboardPage ? 0 : 1000
      );
    };

    onMounted(() => {
      const allCollapsed = document.querySelectorAll(".collapse");
      allCollapsed.forEach((collapse) => {
        collapseMap[collapse.id] = bsCollapse(collapse.id);
      });
      setActivePage();
    });
  },
};
</script>
