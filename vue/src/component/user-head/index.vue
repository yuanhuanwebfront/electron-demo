<script setup>
  // 用户头像组件
  import defaultImg from '@/assets/img/user.png';

  const props = defineProps({
    userInfo: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="user-head-container">
    <img :src="props.userInfo.headImg || defaultImg" />
  </div>
</template>

<style scoped>
  .user-head-container{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #d1d1d1;
    overflow: hidden;
    cursor: pointer;
  }
  .user-head-container img{
    width: 100%;
    height: auto;
  }
</style>