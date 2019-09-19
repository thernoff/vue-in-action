<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!--Атрибут scoped ограничивает область видимости CSS текущим компонентом-->
<style scoped>

</style>