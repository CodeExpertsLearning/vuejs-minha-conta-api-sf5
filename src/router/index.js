import { createRouter, createWebHistory } from "vue-router";
import Storage from "../services/storage.js";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";
import Orders from "../views/account/Orders.vue";
import Profile from "../views/account/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/my-account",
    name: "Account",
    component: Account,
    children: [
      {
        path: "orders",
        name: "Orders",
        component: Orders
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !Storage.getData("token")) next({ name: "Login" });
  else next();
});

export default router;
