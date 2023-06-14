<template>
    <div class="article">
      <b-card
        overlay
        :img-src="article.urlToImage || 'https://dummyimage.com/600x400/000000/ffffff&text=no+photo'"
        img-alt=""
        text-variant="white"
        :title='article.title'
        >
      <b-card-text>
        {{ article.description }}
        <br>
        <a :href="article.url" target="_blank">Continue reading...</a>
      </b-card-text></b-card>
      <br>
      
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