<template>
    <div class="articles">
    <div v-for="article in newsStore.articles.slice(0, 1)" :key="article.title">
        <ArticleBig :article="article" />
    
    </div>

    <div v-for="article in newsStore.articles.slice(2)" :key="article.title">
      <Article :article="article" />
      <!-- <Article :article="article" :category="category" /> -->

    </div>
</div>
</template>

<script>
import Article from './Article.vue';
import ArticleBig from './ArticleBig.vue';
import { useNewsStore } from '../stores/articles';
// import { onBeforeMount, ref } from "vue";

export default {
  components: {
    Article
  },
  setup() {
    const newsStore = useNewsStore();
    // onBeforeMount( async () => {

    //     await newsStore.fetchArticles();
    //     articles.value =  newsStore.articles;

    // })
    return {
      newsStore,
    //   fetchArticles,
    };
    }
}
</script>