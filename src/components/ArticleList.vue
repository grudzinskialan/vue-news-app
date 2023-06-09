<template>
    <div class="articles">
    <!-- <button @click="fetchArticles">Fetch Articles</button> -->
    <div v-for="article in articles" :key="article.title">
      <Article :article="article" :category="category" />
    </div>
</div>
</template>

<script>
import Article from './Article.vue';
import { useNewsStore } from '../stores/articles';
import { onMounted } from "vue";

export default {
  name: 'articlelist',
  components: {
    Article
  },
//   props: {
//     articleList
//   },
  setup() {
    const newsStore = useNewsStore();
    onMounted(() => {
      newsStore.fetchArticles();
    })

    const articles = newsStore.articles; 


    console.log(articles);
    }
}
</script>