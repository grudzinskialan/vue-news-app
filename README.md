# vue-news-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### prototype
figma link: https://www.figma.com/proto/Zt0wsw1czMvGUdVuPrIzb0/Untitled?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1

### features

#### its still clearly work in progress, will fix that once health allows me to
* displaying news articles from https://newsapi.org/
* search bar allowing user to search for categories and/or article titles
* after signing in (optional), the user can mark an article as starred - it'll be saved in his profile for accessing it later on - not available for user that is not signed in
* small weather widget on the navbar
* clickable categories - under the navbar and in the bottom right corner component
* each article will be opened as a new page (possibly not - api doesn't share the whole article content, only the headlines)
