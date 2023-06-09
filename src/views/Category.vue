<template>
    <div>
      <h2>Category: {{ category }}</h2>
      <ArticleList :category="category" key="category" />
    </div>
  </template>
  
  <script>
  import ArticleList from '../components/ArticleList.vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'Category',
    components: {
      ArticleList,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      let category = route.params.category;
  
    //   // Watch for route changes
    //   watch(() => route.params.category, (newValue) => {
    //     category = newValue;
    //   });
  
      return {
        category,
      };
    },
  };
  </script>
  