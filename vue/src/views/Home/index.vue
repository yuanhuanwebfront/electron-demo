<script setup>
  import { getTopSong } from '@/api/home';

  getTopSong().then(res => {
    console.log(res)
  })
</script>

<template>
  <div class="home-container">
    
  </div>
</template>