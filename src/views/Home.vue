<template>
    <div>
      <!-- <h2>Home</h2> -->
      <ArticleList />
    </div>
  </template>

  <script>
  import ArticleList from '../components/ArticleList.vue';
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';
import { useNewsStore } from '../stores/articles';
  import { onBeforeMount } from "vue";

  
  export default {
    name: 'Home',
    components: {
      ArticleList,
    },
    setup() {
      const newsStore = useNewsStore();

      onBeforeMount( async () => {
        await newsStore.fetchArticles();
    })
  
      return {
        newsStore,
      };
    },
  };
  </script>
  