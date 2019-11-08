<template>
  <header>
    <nav class="navbar navbar-dark bg-dark text-white">
      <h1>
        <router-link :to="{name: 'iMain'}">{{ sitename }}</router-link>
      </h1>
      <div class="ml-auto">
        <!-- <button type="button" class="btn btn-default text-white btn-lg" v-on:click="showCheckout">
          <span>
            <i class="fas fa-shopping-cart mr-1"></i>
            {{ cartItemCount }}
          </span>Checkout
        </button>-->
        <div v-if="!mySession">
          <button type="button" class="btn btn-default btn-lg" v-on:click="signIn">Sign In</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-default btn-lg" v-on:click="signOut">
            <img class="photo" :src="mySession.photoURL" alt />
            Sign Out
          </button>
        </div>
        <div>
          <router-link
            active-class="active"
            tag="button"
            class="btn btn-default text-white btn-lg"
            :to="{name: 'Form'}"
          >
            <span>
              <i class="fas fa-shopping-cart mr-1"></i>
              {{ cartItemCount }}
            </span>Checkout
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from "firebase";
export default {
  name: "my-header",
  data() {
    return {
      sitename: "Vue.js Pet Depot"
    };
  },
  props: ["cartItemCount"],
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("SET_SESSION", user || false);
    });
  },
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log("signed in!");
        })
        .catch(function(error) {
          console.log("error " + error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // успешный выход
          console.log("signed out!");
        })
        .catch(function(error) {
          console.log("error " + error);
        });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
};
</script>

<style scoped>
a,
a:hover {
  text-decoration: none;
  color: white;
}

/* Данный класс будет добавлен кнопке Checkout при нахождении на соответсвующем маршруте */
.router-link-exact-active {
  border-color: lightgray;
  color: lightgray !important;
}

.photo {
  width: 25px;
  height: 25px;
}
</style>