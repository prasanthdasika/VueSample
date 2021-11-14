<template>
<div >
  <h3>Vuex State Counter: {{ $store.state.counter }}</h3><button @click="addOne">Get News</button>
  <p >{{  errorText  }}</p>
  <p v-if="isLoading"> Loading...</p>
   <ul>
   <news-display  v-for="(item,index) in news" :newsItem="item" :key="index"></news-display>
 </ul>

</div>
</template>

<script>
import axios from 'axios'
import NewsDisplay from './components/learning-resources/NewsDisplay.vue'

export default {
  metaInfo: {
    title: 'Global News app',
    // all titles will be injected into this template
    titleTemplate: 'Global News App'
  },
  mounted () {
  },
  data () {
    return {
      news: [],
      isLoading: false,
      errorText: ''
    }
  },
  components: {
    NewsDisplay
  },
  methods: {
    async  LoadData () {
      // fetch data from a url endpoint
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-10-14&sortBy=publishedAt&apiKey=a49ea76322a84deb947cbfcc0c50731e')
        this.news = response.data.articles
        this.isLoading = false
        this.errorText = ''
      } catch (error) {
        this.errorText = error
      }
    },
    addOne () {
      this.isLoading = true
      this.$store.state.counter++
      this.LoadData()
    }
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

 ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>
