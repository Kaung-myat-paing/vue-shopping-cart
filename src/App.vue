<template>
  <v-app>
    <div class="my-3">
      <v-app-bar app flat color="white" class="container">
        <router-link to="/" style="text-decoration: none">
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
        </router-link>
        <v-spacer></v-spacer>

        <v-btn text to="/shopping-cart">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>