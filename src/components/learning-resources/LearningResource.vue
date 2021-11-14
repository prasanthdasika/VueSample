<template>
 <li>
    {{storedResource.title}}
 </li>
</template>
<script>
export default {
  name: 'learning-resource',
  props: ['storedResource']
}
</script>
