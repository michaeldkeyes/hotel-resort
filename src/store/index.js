/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: [],
    sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  },
  getters: {
    featuredRooms: (state) => {
      return state.rooms.filter((room) => room.featured === true);
    },
    getRoom: (state) => (slug) => {
      return state.rooms.find((room) => room.slug === slug);
    },
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    updatePrice(state, price) {
      state.price = price;
    },
    setMaxPrice(state, price) {
      state.maxPrice = price;
    },
    setMaxSize(state, size) {
      state.maxSize = size;
    },
    setSortedRooms(state, rooms) {
      state.sortedRooms = rooms;
    },
    updateType(state, type) {
      state.type = type;
    },
    updateCapacity(state, capacity) {
      state.capacity = capacity;
    },
    updateMinSize(state, size) {
      state.minSize = size;
    },
    updateMaxSize(state, size) {
      state.maxSize = size;
    },
    updateBreakfast(state) {
      state.breakfast = !state.breakfast;
    },
    updatePets(state) {
      state.pets = !state.pets;
    },
  },
  actions: {},
  modules: {},
});
