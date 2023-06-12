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
import { onBeforeMount, ref } from "vue";

export default {
//   name: 'articlelist',
  components: {
    Article
  },
//   props: {
//     articleList
//   },
  setup() {
    const articles = ref(null);
    const newsStore = useNewsStore();

    onBeforeMount( async () => {

        // newsStore.fetchArticles();
        articles.value = await newsStore.fetchArticles().articles;

    })
    // const articles = newsStore.articles; 

    return {
      articles,
    //   fetchArticles,
    };
    }
}
</script>