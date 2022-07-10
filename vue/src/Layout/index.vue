<script setup>
  import SideBar from './sidebar.vue';
  import Content from './content.vue';
  import './layout.css';


</script>

<template>
  <div class="flex layout-container">
    <SideBar></SideBar>
    <Content></Content>
  </div> 
</template>