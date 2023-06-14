import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore('news', {
  state: () => ({
    articles: [],
  }),
  getters: {
    filteredFirstArticle() {
      return this.articles[0];
    },
    filteredSecondArticle() {
      return this.articles[1];
    },
    filteredThirdArticle() {
      return this.articles[2];
    },
  },
  actions: {
    async fetchArticles() {
      try {
        const apiKey = '18cecf276054488284bea10a58c5a1b1';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        this.articles = response.data.articles;
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    async searchArticles(query) {
      try {
        // console.log('sie zyje')
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            apiKey: '18cecf276054488284bea10a58c5a1b1',
          },
        });
        this.articles = response.data.articles;
        console.log(response.data);
      } catch (error) {
        console.error('Failed to search articles', error);
      }
    },
    async fetchArticlesByCategory(category) {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
          params: {
            category,
            apiKey: '18cecf276054488284bea10a58c5a1b1',
          },
        });
        this.articles = response.data.articles;
      } catch (error) {
        console.error('Failed to fetch articles', error);
      }
    },
  },
});