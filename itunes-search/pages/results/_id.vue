<template>
  <div>
    <!--Параметр маршрута, переданный из поиска-->
    <h1>Results for {{$route.params.id}}</h1>
    <div v-if="albumData">
      <div v-for="(album, index) in albumData" v-bind:key="index">
        <Card
          :title="album.collectionCensoredName"
          :image="album.artworkUrl60"
          :artistName="album.artistName"
          :url="album.artistViewUrl"
          :color="picker(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? "red" : "blue";
    }
  },
  computed: {
    albumData() {
      console.log("albumData", this.$store.state.albums);
      return this.$store.state.albums;
    }
  },
  // Параметр middleware позволяет определить промежуточный обработчик для страницы.
  // Он будет выполняться при каждой загрузку компонента.
  middleware: "search"
};
</script>