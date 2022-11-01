<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>测试数据1</li>
      <li>测试数据2</li>
      <li>测试数据3</li>
      <li>测试数据4</li>
      <li>测试数据5</li>
      <li>测试数据6</li>
      <li>测试数据7</li>
      <li>测试数据8</li>
      <li>测试数据9</li>
      <li>测试数据10</li>
      <li>测试数据11</li>
      <li>测试数据12</li>
      <li>测试数据13</li>
      <li>测试数据14</li>
      <li>测试数据15</li>
      <li>测试数据16</li>
      <li>测试数据17</li>
      <li>测试数据18</li>
      <li>测试数据19</li>
      <li>测试数据20</li>
      <li>测试数据21</li>
      <li>测试数据22</li>
      <li>测试数据23</li>
      <li>测试数据24</li>
      <li>测试数据25</li>
      <li>测试数据26</li>
      <li>测试数据27</li>
      <li>测试数据28</li>
      <li>测试数据29</li>
      <li>测试数据30</li>
      <li>测试数据31</li>
      <li>测试数据32</li>
      <li>测试数据33</li>
      <li>测试数据34</li>
      <li>测试数据35</li>
      <li>测试数据36</li>
      <li>测试数据37</li>
      <li>测试数据38</li>
      <li>测试数据39</li>
      <li>测试数据40</li>
      <li>测试数据41</li>
      <li>测试数据42</li>
      <li>测试数据43</li>
      <li>测试数据44</li>
      <li>测试数据45</li>
      <li>测试数据46</li>
      <li>测试数据47</li>
      <li>测试数据48</li>
      <li>测试数据49</li>
      <li>测试数据50</li>
      <li>测试数据51</li>
      <li>测试数据52</li>
      <li>测试数据53</li>
      <li>测试数据54</li>
      <li>测试数据55</li>
      <li>测试数据56</li>
      <li>测试数据57</li>
      <li>测试数据58</li>
      <li>测试数据59</li>
      <li>测试数据60</li>
      <li>测试数据61</li>
      <li>测试数据62</li>
      <li>测试数据63</li>
      <li>测试数据64</li>
      <li>测试数据65</li>
      <li>测试数据66</li>
      <li>测试数据67</li>
      <li>测试数据68</li>
      <li>测试数据69</li>
      <li>测试数据70</li>
      <li>测试数据71</li>
      <li>测试数据72</li>
      <li>测试数据73</li>
      <li>测试数据74</li>
      <li>测试数据75</li>
      <li>测试数据76</li>
      <li>测试数据77</li>
      <li>测试数据78</li>
      <li>测试数据79</li>
      <li>测试数据80</li>
      <li>测试数据81</li>
      <li>测试数据82</li>
      <li>测试数据83</li>
      <li>测试数据84</li>
      <li>测试数据85</li>
      <li>测试数据86</li>
      <li>测试数据87</li>
      <li>测试数据88</li>
      <li>测试数据89</li>
      <li>测试数据90</li>
      <li>测试数据91</li>
      <li>测试数据92</li>
      <li>测试数据93</li>
      <li>测试数据94</li>
      <li>测试数据95</li>
      <li>测试数据96</li>
      <li>测试数据97</li>
      <li>测试数据98</li>
      <li>测试数据99</li>
      <li>测试数据100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  mounted() {
    // new BScroll('.wrapper', {})

    //默认情况下BScroll是不可以实时的监听滚动位置
    // probe 侦测滚动, 0,1不监听滚动, 2:在手指滚动过程中检测,手指离开后的惯性滚动过中不侦测, 3: 手指离开后的惯性也侦测
    let bScroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true
    });
    bScroll.on('scroll', position => {
      // console.log(position)
    })
    bScroll.on('pullingUp', () => {
      console.log("测试上拉加载更多~~~")
      // 发送网络请求, 请求更多页的数据

      // 等数据请求完成, 并且将新的数据展示出来后
      setTimeout(() => {
        bScroll.finishPullUp()
      }, 2000)
    })
  },
  methods: {
    btnClick() {
      console.log("111")
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  overflow: hidden;
  background-color: red;
}
</style>
