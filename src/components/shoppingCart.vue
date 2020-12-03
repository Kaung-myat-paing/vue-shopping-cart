<template>
  <v-container fluid>
    <h2 class="container">Shopping Cart</h2>
    <v-divider></v-divider>
   
      <v-row class="pa-5 hidden-sm-and-down">
        <v-col cols="1"  align-self="center" offset="1">
          <v-btn icon>
            <v-icon> clear </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.4"
            contain
          ></v-img>
        </v-col>
        <v-col cols="3" class="mx-5" align-self="center">
          <h4 class="pt-3">Vuetify Vuetify Vuetify Vuetify</h4>
          <p class="text--secondary">White</p>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-btn small>
            <v-icon> add </v-icon>
          </v-btn>
          <span class="px-5">1</span>
          <v-btn small>
            <v-icon> remove </v-icon>
          </v-btn>
        </v-col>
        <v-col align-self="center">
          <p class="pt-3">$23</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="pa-5 hidden-sm-and-down">
        <v-col cols="1" align-self="center" offset="1">
          <v-btn icon>
            <v-icon> clear </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.4"
            contain
          ></v-img>
        </v-col>
        <v-col cols="3" class="mx-5" align-self="center">
          <h4 class="pt-3">Vuetify Vuetify Vuetify Vuetify</h4>
          <p class="text--secondary">White</p>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-btn small>
            <v-icon> add </v-icon>
          </v-btn>
          <span class="px-5">1</span>
          <v-btn small>
            <v-icon> remove </v-icon>
          </v-btn>
        </v-col>
        <v-col align-self="center">
          <p class="pt-3">$23</p>
        </v-col>
      </v-row>
    
  </v-container>
</template>
<script>
export default {};
</script>