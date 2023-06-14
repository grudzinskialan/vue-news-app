<template>
    <div class="article">
      <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <a :href="article.url" target="_blank">Read More</a>
    </div>
  </template>
  
  <script>
  export default {
    props: ['article'],
  };
  </script>
  
  <style scoped>
  .article {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  </style>