<template>
    <div>
      <h2>Search: {{ query }}</h2>
      <ArticleList :query="query" key="search" />
    </div>
  </template>
  
  <script>
  import ArticleList from '../components/ArticleList.vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'Search',
    components: {
      ArticleList,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      let query = route.params.query;
  
      // Watch for route changes
    //   watch(() => route.params.query, (newValue) => {
    //     query = newValue;
    //   });
  
      return {
        query,
      };
    },
  };
  </script>
  