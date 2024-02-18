<template>
  <ul class="menuList">
    <li>
      <router-link class="menu-link" to="home"
        ><font-awesome-icon
          class=""
          icon="fa-home"
          role="button"
        />首頁</router-link
      >
    </li>
    <li class="dropdown-list">
      <div
        class="dropdown-title"
        @click="toggleStatus"
        data-bs-toggle="collapse"
        data-bs-target="#productSetting"
        aria-expanded="false"
        aria-controls="productSetting"
      >
        <span class="pe-none">
          <font-awesome-icon class="" icon="fa-list" role="button" />產品設定
        </span>
        <font-awesome-icon
          class="dropdown-arrow pe-none"
          icon="fa-chevron-right"
        />
      </div>
      <div class="collapse multi-collapse" id="productSetting">
        <ul>
          <li class="collapse-item" parentId="productSetting">
            <router-link class="menu-link" to="setProduct"
              >建立商品</router-link
            >
          </li>
          <li class="collapse-item" parentId="productSetting">
            <router-link class="menu-link" to="editProduct"
              >修改商品</router-link
            >
          </li>
          <li class="collapse-item" parentId="productSetting">
            <router-link class="menu-link" to="productList"
              >商品列表</router-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <router-link class="menu-link" to="orderManage"
        ><font-awesome-icon
          class=""
          icon="fa-cart-shopping"
          role="button"
        />購物車</router-link
      >
    </li>
  </ul>
</template>
<script>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { bsCollapse } from "@/methods/bootstrap.js";

export default {
  setup() {
    const route = useRoute();
    const collapseMap = {};
    const isClickableMap = {};
    const preCollapse = ref(null);
    watch(
      () => route.path,
      (value) => {
        setActivePage();
      }
    );
    const toggleStatus = (event) => {
      const controls = event.target.getAttribute("aria-controls");
      if (isClickableMap[controls] === undefined) {
        isClickableMap[controls] = true;
      }
      if (isClickableMap[controls]) {
        event.target.classList.toggle("show");
      }
      isClickableMap[controls] = false;
      setTimeout(() => {
        isClickableMap[controls] = true;
      }, 350); // bootstrap 預設動畫時間為0.35秒
    };
    const setOtherCollapse = (status, targetId = null) => {
      if (targetId) {
        for (const key in collapseMap) {
          if (key !== targetId) {
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
      // 尋找active頁面
      await nextTick();
      const activeElement = document.querySelector(".router-link-active");
      const liElement = activeElement.parentElement; // li元素
      const removeDropdownStatus = (array) => {
        // 移除所有dorpDown狀態
        array.forEach((el) => {
          el.classList.remove("show");
          el.classList.remove("active");
        });
      };
      if (liElement.classList.contains("collapse-item")) {
        const liParentId = liElement.getAttribute("parentId");
        if (preCollapse.value !== liParentId) {
          preCollapse.value = liParentId;
          // 選擇了其他下拉群組
          const dropdownTitle = document.querySelectorAll(
            ".dropdown-title:not(.show)"
          );
          removeDropdownStatus(dropdownTitle);
          const parentCollapse = document.querySelector(
            // 透過parentId取得最上層的collapse元素
            `[aria-controls=${liParentId}]`
          );
          setOtherCollapse("hide", liParentId);
          // 添加顯示樣式
          await nextTick();
          setTimeout(() => {
            parentCollapse.classList.add("active");
            parentCollapse.classList.add("show");
            collapseMap[liParentId].show();
          }, 100);
        }
      } else {
        const dropdownTitle = document.querySelectorAll(".dropdown-title");
        removeDropdownStatus(dropdownTitle);
        setOtherCollapse("hide");
        preCollapse.value = null;
      }
    };

    onMounted(() => {
      const allCollapsed = document.querySelectorAll(".collapse");
      allCollapsed.forEach((collapse) => {
        collapseMap[collapse.id] = bsCollapse(collapse.id);
      });
      setActivePage();
    });
    return {
      toggleStatus,
    };
  },
};
</script>
<style lang="scss" scoped>
.collapse-item {
  padding-top: 16px;
  padding-bottom: 0;
  &::before {
    content: "－";
  }
}
</style>
