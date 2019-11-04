<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>
      <nuxt-link class="title" to="/">iTunes Search</nuxt-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/">
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
</script>

<style scoped>
.title {
  text-decoration: none !important;
}

.title:visited {
  color: white;
}
</style>