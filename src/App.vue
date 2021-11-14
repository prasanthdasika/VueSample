<template>
<div>
<table>
  <th><td>Title</td><td> Description</td></th>
  <news-display  v-for="(item,index) in news" :newsItem="item" :key="index"></news-display>
</table>
</div>
</template>

<script>
import axios from 'axios'
import NewsDisplay from './components/learning-resources/NewsDisplay.vue'

export default {
  mounted () {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-10-14&sortBy=publishedAt&apiKey=a49ea76322a84deb947cbfcc0c50731e')
      .then((response) => (
        this.news = response.data.articles
      ))
  },
  data () {
    return {
      news: []
    }
  },
  components: {
    NewsDisplay
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
