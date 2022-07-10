<script setup>
  import routes from '@/router/routes';
  import UserHead from '@/component/user-head/index.vue';
  
  const routesArr = routes[0].children;


</script>

<template>
  <div class="sidebar-container">
    <div class="flex pl-20 mb-12 logo">
      <UserHead></UserHead>
      <span class="pl-12">未登录</span>
    </div>
    <div class="sidebar-item" v-for="route in routesArr" 
      :key="route.name">

      <router-link class="flex pl-20 link" active-class="active" :to="route.path">
        <i v-if="route.meta && route.meta.icon" class="iconfont mr-12" :class="route.meta.icon"></i>{{route.meta.title}}
      </router-link>
    </div>
  </div> 
</template>