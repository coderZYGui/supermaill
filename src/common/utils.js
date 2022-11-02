// 防抖介绍: https://blog.csdn.net/weixin_43371610/article/details/100100120?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control
/*
利用setTimeout（）特性实现延时触发，通过delay来控制延时时间

利用闭包原理将timer存在内存之中

this指向问题，定时器内的this是指向window的，所以要通过call（）方法来改变其this指向，大家如果不理解上边的可以直接写fn.call(obtn)调用要执行的函数,也是可以的。
 */
export function debounce(fn, delay) {
  let timerId = null;
  return function () {
    // 保存当前函数的this
    let self = this;
    // arguments：所有参数
    let args = arguments;
    timerId && clearTimeout(timerId);
    timerId = setTimeout(function () {
      // 调用函数
      fn.apply(self, args);
    }, delay || 1000);
  }
}
