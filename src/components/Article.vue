<template>
    <div class="article">
      <b-card no-body class="overflow-hidden" style="max-width: 1080px;">
        <b-row class="g-0">
          <b-col md="6">
            <b-card-img
              :src="article.urlToImage || 'https://dummyimage.com/600x400/000000/ffffff&text=no+photo'"
              alt="Image"
              class="rounded-0"
            />
          </b-col>
          <b-col md="6">
            <b-card-body :title='article.title'>
              <b-card-text>
                {{ article.description }}
                <br>
                <a :href="article.url" target="_blank">Continue reading...</a>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- <b-card
        overlay
        :img-src="article.urlToImage || 'https://dummyimage.com/600x400/000000/ffffff&text=no+photo'"
        img-alt=""
        text-variant="white"
        :title='article.title'
        >
      <b-card-text>
        {{ article.description }}
      </b-card-text></b-card> -->
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