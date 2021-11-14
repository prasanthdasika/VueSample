<template>
 <li>
   <base-card>
     <header>
     <h3>   {{  substring( newsItem.title)   }} </h3> <a :href="newsItem.url">Open</a>
     </header>
        <p>{{newsItem.description}}</p>
   </base-card>

   </li>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue'
export default {
  components: { BaseCard },
  name: 'news-display',
  props: ['newsItem'],
  methods: {
    substring (val) {
      return val.substring(0, 10)
    }
  }

}
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
