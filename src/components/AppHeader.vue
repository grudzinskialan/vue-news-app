<template>
      <nav class="header">
        <div class="brand">
        <h1 class="brand__name">
            Project news
        </h1>
      <!-- <app-search></app-search> -->
    </div>
    <ul class="nav__links">
      <li class="nav__link">
        <router-link to="/" class="router__link">World</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/local" class="router__link">Local</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/culture" class="router__link">Culture</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/politics" class="router__link">Politics</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/sports" class="router__link">Sports</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/science" class="router__link">Science</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/technology" class="router__link">Technology</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/health" class="router__link">Health</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/style" class="router__link">Style</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/travel" class="router__link">Travel</router-link>
      </li>
    </ul>
    <div class="search-bar">
      <input type="text" v-model="searchTerm" @keydown.enter="search">
      <button @click="search">Search</button>
    </div>
  </nav>
</template>

<script>
// import AppSearch from './AppSearch.vue'

export default {
  name: 'appheader',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    search() {
      this.$router.push('/search/' + this.searchTerm);
    },
  },
}
</script>

<style scoped>
.header {
  color: black;
  margin: 50px 0 0 0;
  width: 100%;
}
.brand {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
}
.brand__name {
  font-size: 50px;
}
.nav__links {
  margin-top: 5%;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.nav__link {
  display: inline-block;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  color: #434343;
  text-align: center;
}
.router__link {
  text-decoration: none;
  text-transform: uppercase;
  color: #434343;
  text-align: center;
}
.router-link-exact-active {
  border-bottom: 1px solid #434343;
  font-weight: bold;
  color: #434343;
}
.router__link:hover {
  border-bottom: 1px solid #696969;
  color: #696969;
  font-weight: bold;
}
@media only screen and (max-width: 700px) {
  .brand {
    grid-auto-flow: row;
    align-items: center;
    justify-content: space-around;
    justify-items: center;
    grid-gap: 20px;
  }
  .brand__name {
    font-size: 40px;
  }
  .header {
    margin-top: 20px;
  }
}
</style>