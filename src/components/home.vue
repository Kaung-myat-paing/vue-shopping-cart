<template>
  <v-container fluid style="background: #f2f5f8">
    <!-- hero -->
    <div class="container">
      <v-carousel hide-delimiters height="255">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <!-- products -->
    <div class="container pt-15">
      <p class="text-h6">FEATURED PRODUCTS</p>
      <v-row justify="center">
        <v-col
          md="4"
          cols="12"
          v-for="product in productList"
          :key="product.id"
        >
          <v-card max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="product.image"></v-img>

            <v-card-title>{{ product.name }}</v-card-title>

            <v-card-actions>
              <div class="pl-2 subtitle-1">$ {{ product.price }}</div>
              <v-spacer></v-spacer>

              <v-btn
                dark
                small
                color="primary"
                outlined
                @click="addToCart(product)"
              >
                <v-icon dark>add_shopping_cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { store, mutations, storage } from "../store/store";

export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    productList: [],
  }),
  created() {
    this.getProducts();
  },
  computed: {
    cartList() {
      return store.cart;
    },
  },
  methods: {
    async getProducts() {
      const contentful = require("contentful");
      const client = contentful.createClient({
        space: "wy7c2xh4rfri",
        accessToken: "YK7gMsZ6BhjoFV_qGQvT6MMkjCWgGl68g4VWVkgOPUs",
      });
      try {
        const response = await client.getEntries({
          content_type: "clothingProducts",
        });
        this.productList = response.items.map((product) => {
          const { name, price } = product.fields;
          const { id } = product.sys;
          const image = product.fields.image.fields.file.url;
          return { name, price, id, image };
        });
        storage.saveProducts(this.productList);
      } catch (error) {
        console.error();
      }
    },
    addToCart(product) {
      // add product to cart
      let cartItem = { ...product, amount: 1 };
      let isExistedItem = this.cartList.find((item) => item.id === cartItem.id);
      if (isExistedItem) {
        isExistedItem.amount += 1;
        storage.saveCart(this.cartList);
        mutations.setCartValue();
      } else {
        mutations.setCart(cartItem);
      }

      // add cart to localStorage
      storage.saveCart(this.cartList);
      // set cart values
      mutations.setCartValue();
      //open shopping cart
      mutations.toggleDrawer();
    },
  },
};
</script>
<style scoped>
</style>
