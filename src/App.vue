<template>
  <v-app>
    <div class="my-3">
      <v-navigation-drawer  fixed right v-model="drawerState"  width="380px">
        <div class="px-4">
          <v-row
            class="d-flex py-2 px-2"
            justify="space-between"
            align="center"
          >
            <span class="text-h6">Shopping Cart</span>
            <v-btn icon @click="openShoppingCart()">
              <v-icon> clear </v-icon>
            </v-btn>
          </v-row>
        </div>
        <v-divider></v-divider>
        <v-list three-line>
          <template v-for="item in cartList">
            <v-list-item :key="item.id">
              <v-list-item-avatar tile size="60">
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle> ${{ item.price }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-btn icon rounded @click="addAmount(item.id)">
                  <v-icon>keyboard_arrow_up</v-icon>
                </v-btn>

                <span class="text-center">{{ item.amount }}</span>
                <v-btn icon rounded @click="lowerAmount(item.id)">
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="removeCartItem(item.id)"
                  ><v-icon> clear </v-icon></v-btn
                >
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
        <div v-if="!cartList.length">
          <p class="text-center">Shopping cart is empty</p>
        </div>

        <v-divider></v-divider>
        <div
          v-if="cartList.length"
          class="d-flex pa-3 align-center"
          style="float: right"
        >
          <span class="text-body-2 grey--text"
            >Subtotal: ({{ totalAmount }} items):
          </span>
          <div class="pl-3 red--text headline d-inline-flex font-weight-medium">
            ${{ totalPrice }}
          </div>
        </div>
        <div class="col col-12">
          <v-btn color="primary" block large @click="clearCart"
            >Clear All</v-btn
          >
        </div>
      </v-navigation-drawer>
      <v-app-bar app flat color="white" class="container">
        <div class="d-inline-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-toolbar-title>ACHIEVE</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>
        <v-badge color="primary" :content="totalAmount" overlap>
          <v-btn icon @click="openShoppingCart()">
            <v-icon>shopping_cart</v-icon>
          </v-btn>
        </v-badge>
      </v-app-bar>
    </div>

    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home";
import { mutations, store, storage } from "./store/store";
export default {
  name: "App",
  components: {
    Home,
  },
  computed: {
    drawerState: {
      get: function () {
        return store.drawer;
      },
      set: () => null,
    },

    cartList() {
      return store.cart;
    },
    totalPrice() {
      return store.totalPrice;
    },
    totalAmount() {
      return String(store.totalAmount);
    },
  },
  created() {
    storage.getCart();
    mutations.setCartValue();
  },
  watch: {
    drawerState(e){
      console.log(e);
    }
  },

  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
  }),
  methods: {
    openShoppingCart() {
      mutations.toggleDrawer();
    },
    removeCartItem(id) {
      mutations.removeCartItem(id);
      mutations.setCartValue();
      storage.saveCart(this.cartList);
    },
    clearCart() {
      mutations.clearCart();
      mutations.setCartValue();
      storage.saveCart(this.cartList);
    },
    addAmount(id) {
      let tempItem = this.cartList.find((item) => item.id === id);
      tempItem.amount += 1;
      storage.saveCart(this.cartList);
      mutations.setCartValue();
    },
    lowerAmount(id) {
      let tempItem = this.cartList.find((item) => item.id === id);
      tempItem.amount = tempItem.amount - 1;
      if (tempItem.amount > 0) {
        storage.saveCart(this.cartList);
        mutations.setCartValue();
      } else {
        mutations.removeCartItem(id);
        storage.saveCart(store.cart);
        mutations.setCartValue();
      }
    },
  },
};
</script>