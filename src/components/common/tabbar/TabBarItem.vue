<template>
  <div class="tab-bar-item">
    <div class="tab-bar-item" @click="itemClick">

      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>

      <!-- 图片active插槽 -->
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <!-- 这样写样式不起效果  -->
      <!-- <slot :class="{ active: isActive }" name="item-text"></slot> -->
      <!-- 渲染的时候会直接把它这个替换成  <div slot="item-text">首页</div> -->
      <!-- 一般不会直接在插槽上绑定动态属性，因为渲染时会把它替换掉
       外面套一个div这样不会把原来的替换掉，上面两个最好也这样写  -->

      <!--      <div :class="{ active: isActive }">-->
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "rgb(236,99,121)"
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick() {
      //console.log("itemClick")
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1; /* 等价flex-grow: 1 */
  text-align: center;
  height: 49px;
  font-size: 15px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

/*.active {*/
/*  color: #c33979;*/
/*}*/
</style>
