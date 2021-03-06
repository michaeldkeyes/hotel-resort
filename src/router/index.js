/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rooms from "../views/Rooms.vue";
import Error from "../views/Error.vue";
import SingleRoom from "../views/SingleRoom";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  } /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  '../views/About.vue'),
  },*/,
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/rooms/:slug",
    name: "SingleRoom",
    props: true,
    component: SingleRoom,
  },
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
