
<template>
  <div class="about">
    <p v-bind:class="style">the infomation:{{message}}</p>
    <button @click="reverseMessage">改变</button>
    <p v-if="Math.random()>0.5">哈哈哈</p>
    <h1 v-show="true">Hello!</h1>change the message:
    <input type="text" v-model="message" v-focus/>
    <button @keyup.delete="sayhello">delete</button>
    <!-- 全选复选框 -->
    <input type="checkbox" v-model="checked" @change="changeAll" />
    全选{{checked}}
    <input type="checkbox" v-model="checkeds" value="saber" />saber
    <input type="checkbox" v-model="checkeds" value="archar" />archar
    <input type="checkbox" v-model="checkeds" value="lancer" />lancer
    <div>
      <span>选择的值为{{checkeds}}</span>
    </div>
    <!-- 下拉列表双向数据绑定 -->
    <select id="web" v-model="selected">
      <option value="www.baidu.com">百度</option>
      <option value="www.saber.com">saber</option>
      <option value="www.lancer.com">lancer</option>
    </select>
    <p>{{selected}}</p>
    <ul>
      <li v-for="(item,index) in items" :key="index">{{index}}:{{item.info}}</li>
    </ul>
    <!-- 组件 -->
    <mycom
    v-for="post in posts" 
    :key="post.id" 
    :title="post.title">
    </mycom>


    <!-- animate.css -->
    <button @click="show = !show" >点我</button>
    <transition 
          name="animate-css"
          enter-active-class="animated swing"
          leave-active-class="animated bounceOut"
    >
      <p v-if="show">看我七十二变</p>
    </transition>
    <p class="animated swing">看我七十二变</p>
  </div>
</template>


<script>
import Vue from 'vue'
// 混入实例
var mixin = {
  created:function(){
    document.write("mixin example rrrrrrrrrrrrrrrrrrrrrrrrr");
  },
}
Vue.component('mycom',{
  props: ['title'],
  template: '<h1>{{title}}</h1>'
})

// 自定义聚焦指令
Vue.directive("focus", {
  // 当绑定元素插入到 DOM 中。
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  }
});
// Vue.mixin({
//   created: function () {
// 	  console.log(this.$options)
//     var myOption = this.$options.myOption
	
//     if (myOption) {
//       document.write(myOption)
//     }
//   }
// })
export default {
  name: "about",
  data() {
    return {
      // myOption:'hello!dhfbdsbfjdsbfdsbfj',
      mixins: [mixin],
      created: function () {
        document.write('组件调用' + '<br>')
    },
      show:true,
      posts: [
        { id: 1, title: "saber" },
        { id: 2, title: "lancer" },
        { id: 3, title: "archar" }
      ],
      checked: false,
      checkeds: [],
      checkedArr: ["saber", "archar", "lancer"],
      selected: "www.baidu.com",
      message: "hello",
      style: {
        color: true,
        "font-size": true
      },
      // object:{
      //   sdd:'first',
      //   ffff:'second',
      //   info:'third'
      // }
      items: [{ info: "first" }, { info: "second" }, { info: "third" }]
    };
  },
  methods: {
    changeAll: function() {
      if (this.checked) {
        this.checkeds = this.checkedArr;
      } else {
        this.checkeds = [];
      }
    },
    change: function() {
      this.items.push({ info: "fourth" });
    },
    sayhello: function() {
      alert("do you want to delete");
    },
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
      return this.message;
    }
  },
  //监听单个属性
  watch: {
    message: function(newVal, oldVal) {
      alert("计数器值的变化 :" + oldVal + " 变为 " + newVal + "!");
    },
    checkeds: function() {
      if (this.checkeds.length == this.checkedArr.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  // 使用 Vue 中的 watch 方法监听对象，设置 deep:true 可以进行深度监听，当对象中的属性发生变化时，会调用 handler 方法。
  // watch:{
  //     'message': {
  //         deep: true,
  //         handler: function (newVal,oldVal){
  //           alert('计数器值的变化 :' + oldVal + ' 变为 ' + newVal + '!');
  //         }
  //     }
  // },
  beforeUpdate() {
    this.change();
  }
  //   computed: {
  //   now: function() {
  //     return Date.now();
  //   }
  // }
}
</script>
<style>
.color {
  color: rgb(0, 255, 42);
}
.font-size {
  font-size: 50px;
}
.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count:infinite;
}
</style>
