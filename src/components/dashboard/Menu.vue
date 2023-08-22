<template>
  <img src="@/assets/images/maple-story-logo.webp" class="menu-logo" alt="" />
  <ul class="menuList">
    <li>
      <router-link class="menu-link" to="productList"
        ><font-awesome-icon
          class="lg-down-hide"
          icon="fa-list"
          role="button"
        />產品設定</router-link
      >
    </li>
    <li>
      <router-link class="menu-link" to="orderManage"
        ><font-awesome-icon
          class="lg-down-hide"
          icon="fa-cart-shopping"
          role="button"
        />購物車</router-link
      >
    </li>
  </ul>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.menuList {
  margin: 1rem 0;

  li {
    padding: 0.5rem 0rem;
    svg {
      margin-right: 0.5rem;
    }
  }
}
</style>
