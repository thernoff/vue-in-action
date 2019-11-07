<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="container">
      <div class="row product" v-for="product in sortedProducts" v-bind:key="product.id">
        <div class="col">
          <figure>
            <img class="img-fluid" v-bind:src="product.image" v-bind:alt="product.title" />
          </figure>
        </div>
        <div class="col col-expand">
          <router-link tag="h1" :to="{name: 'Id', params: {id: product.id}}">{{product.title}}</router-link>
          <p v-html="product.description"></p>
          <!--Использование фильтра formatPrice()-->
          <p class="price">{{ product.price | formatPrice }}</p>
          <button
            class="btn btn-primary default"
            v-on:click="addToCart(product)"
            v-if="canAddToCart(product)"
          >Add to cart</button>
          <button class="btn btn-primary default" disabled v-else>Add to cart</button>
          <transition name="bounce" mode="out-in">
            <span
              class="inventory-message"
              v-if="product.availableInventory - cartCount(product.id) === 0"
              key="0"
            >All out!</span>
            <span
              class="inventory-message"
              v-else-if="product.availableInventory - cartCount(product.id) < 5"
              key
            >Only {{product.availableInventory - cartCount(product.id)}} left!</span>
            <span class="inventory-message" v-else key>Buy Now!</span>
          </transition>
          <div class="rating">
            <span
              v-bind:class="{'rating-active': checkRating(n, product)}"
              v-for="n in 5"
              v-bind:key="n"
            >☆</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import { axiosInstance } from "@/axios-instance.js";

export default {
  name: "imain",
  data() {
    return {
      products: {},
      cart: []
    };
  },
  components: { MyHeader },
  filters: {
    // фильтр formatPrice() форматирует цену переданную в центах в строку вида: 12500 -> $12.50 или 2000000 -> $20,000.00
    formatPrice: function(price) {
      if (!parseInt(price)) {
        return "";
      }

      // если значение цены больше 1000 долларов или 100000 центов, то в этом случае представим цену в виде строки: 2000000 -> $20,000.00
      if (price > 99999) {
        // Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
        var priceString = (price / 100).toFixed(2); // 2000000 -> 20000.00
        var priceArray = priceString.split("").reverse(); // 20000.00 -> ["0", "0", ".", "0", "0", "0", "0", "2"]
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ","); // вставляем в массив priceArray новый элемент со значением ","
          index += 4;
        }

        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
  methods: {
    addToCart: function(aProduct) {
      this.cart.push(aProduct.id);
    },
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }

      return count;
    }
  },
  computed: {
    cartItemCount: function() {
      return this.cart.length || "";
    },
    sortedProducts() {
      if (this.products.length > 0) {
        // преобразуем объект в массив с помощью стандартного метода slice()
        let productsArray = this.products.slice(0);
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }

          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }

          return 0;
        }

        return productsArray.sort(compare);
      }
    }
  },
  created: function() {
    axiosInstance.get("products.json").then(response => {
      this.products = response.data.products;
      console.log(this.products);
    });
  }
};
</script>

<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>