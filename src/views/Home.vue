<template>
  <div class="home">
    <HelloWorld v-if="destroy" msg="Welcome to Your Vue.js App"/>
    <button @click="del">销毁组件</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      destroy:true
    }
  },
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    del:function(){
      this.destroy = false;
    }
  },
}
</script>
