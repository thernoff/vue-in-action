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
  // можно воспользоваться методом asyncData, который используется для загрузки данных на стороне сервера
  // во время инициализации компонента. Как и промежуточные обработчики, он принимает контекст приложения.
  asyncData({ params }) {
    return axios
      .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        console.log(response.data.results);
        return { albumData: response.data.results };
      });
  },
  components: {
    Card
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? "red" : "blue";
    }
  },
  computed: {
    /* albumData() {
      console.log("albumData", this.$store.state.albums);
      return this.$store.state.albums;
    } */
  }
  // Параметр middleware позволяет определить промежуточный обработчик для страницы.
  // Он будет выполняться при каждой загрузку компонента.
  //middleware: "search"
};
</script>