<template>
 <tr><td>{{  substring( newsItem.Title)   }}</td><td>{{ newsItem.description }} </td></tr>
</template>
<script>
export default {
  name: 'news-display',
  props: ['newsItem'],
  methods: {
    substring (val) {
      return val.substring(0, 10)
    }
  }

}
</script>
