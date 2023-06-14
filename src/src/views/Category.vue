<template>
    <div>
      <h2>Category: {{ category }}</h2>
      <ArticleList :category="category" key="category" />
    </div>
  </template>

  <script>
  import ArticleList from '../components/ArticleList.vue';
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';
import { useNewsStore } from '../stores/articles';
  
  export default {
    name: 'Category',
    components: {
      ArticleList,
    },
    setup() {
      const route = useRoute();
      const news = useNewsStore();

      let category = route.params.category;
  
      // Watch for route changes
      watch(() => route.params.category, async (newValue) => {
        await news.fetchArticlesByCategory(newValue);
      });
  
      return {
        category,
      };
    },
  };
  </script>
  