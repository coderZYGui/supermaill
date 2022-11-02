<template>
  <!-- 这里包两个div,是为了符合better-scroll的基本要求 wrapper 包 content -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: Number,
    default: 0
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType
    })
    // 监听滚动事件,并打印position
    this.scroll.on('scroll', position => {
      // 传递出去一个scroll事件
      this.$emit('scroll', position);
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
}
</script>

<style scoped>

</style>
