import Vue from "vue";

export const store = Vue.observable({
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
  drawer: null,
});

export const mutations = {
  toggleDrawer() {
    store.drawer = !store.drawer;
  },
  setCart(cartItem) {
    store.cart = [...store.cart, cartItem];
  },
  removeCartItem(id) {
    const index = store.cart.findIndex((item) => item.id === id);
    store.cart.splice(index, 1);
  },
  clearCart() {
    let cartItems = store.cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeCartItem(id));
  },
  setCartValue() {
    let tempTotal = 0;
    let itemsTotal = 0;
    store.cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    store.totalPrice = parseFloat(tempTotal.toFixed(2));
    store.totalAmount = itemsTotal;
  },
};

export const storage = {
  saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  },

  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  getCart() {
    store.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  },
};
