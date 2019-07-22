<template>
  <div class="hello">
    <ul>
      <li v-for="(user,index) in users" :key="index" @click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.job}}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      users: [
        { name: "saber", job: "sword", show: false },
        { name: "archar", job: "arrow", show: false },
        { name: "saber", job: "sword", show: false },
        { name: "archar", job: "arrow", show: false },
        { name: "saber", job: "sword", show: false },
        { name: "archar", job: "arrow", show: false },
        { name: "saber", job: "sword", show: false },
        { name: "archar", job: "arrow", show: false }
      ]
    };
  },
  beforeCreate () {
    alert("组件实例化之前执行的函数");
  },
  created() {
    alert("组件实例化完毕，但页面还未显示");
  },
  beforeMount () {
    alert("组件挂载前，页面仍未展示，但虚拟DOM已经配置");
  },
  mounted() {
    alert("组件挂载后，此方法执行后页面显示");
  },
  beforeUpdate() {
    alert("组件更新前，页面仍未更新，但虚拟DOM已经配置");
  },
  updated () {
    alert("组件更新，此方法执行后，页面更新");
  },
  beforeDestroy () {
    alert("组件销毁前");
  },
  destroyed() {
    alert("组件销毁")
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  margin: 40px auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  border: 1px solid black;
  margin:40px ; 
}
</style>
