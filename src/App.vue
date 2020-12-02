<template>
  <v-app>
    <v-app-bar app flat color="white">
      <div class="d-inline-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Vuetify Shopping Cart</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        
        target="_blank"
        text
      >
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
  
};
</script>
