<template>
  <div id="e3" style="max-width: 400px; margin: auto" class="grey lighten-3">
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-row>
        <v-col xs12>
          <v-card target="_blank" :href="url" :color="color" class="white--text">
            <v-container fluid>
              <v-row>
                <v-col xs7>
                  <div>
                    <div class="headline">{{title}}</div>
                    <div>{{artistName}}</div>
                  </div>
                </v-col>

                <v-col xs5>
                  <v-img :src="image" height="100px" contain></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  // список входных параметров, которые передаются в компонент
  props: ["title", "image", "artistName", "url", "color"]
};
</script>