<template>
  <div>
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
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