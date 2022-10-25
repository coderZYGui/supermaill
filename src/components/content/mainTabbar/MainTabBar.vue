<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="blue">
      <!-- 具名插槽 -->

      <!-- 具名插槽写法1 -->
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">

      <!-- 具名插槽写法2 -->
      <!--      <template v-slot:item-icon>-->
      <!--        <img src="@/assets/img/tabbar/home.svg" alt="">-->
      <!--      </template>-->

      <!-- 具名插槽写法3 -->
      <!--      <template #item-icon>-->
      <!--        <img src="@/assets/img/tabbar/home.svg" alt="">-->
      <!--      </template>-->

      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" active-color="skyblue">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <!--      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">-->
      <!--      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">-->
      <!--      <div slot="item-text">我的</div>-->
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>

import tabBar from "@/components/common/tabbar/TabBar";
import tabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
