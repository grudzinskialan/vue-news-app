<template>
    <div>
      <h2>Search: {{ query }}</h2>
      <ArticleList :query="query" key="search" />
    </div>
  </template>
  
  <script>
  import ArticleList from '../components/ArticleList.vue';
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';
import { useNewsStore } from '../stores/articles';
  
  export default {
    name: 'Search',
    components: {
      ArticleList,
    },
    setup() {
      const route = useRoute();
      const news = useNewsStore();
      let query = route.params.query;
  
      watch(() => route.params.query, async (newValue) => {
        await news.searchArticles(newValue);
      });
  
      return {
        query,
      };
    },
  };
  </script>
  