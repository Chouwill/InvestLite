import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/form",
    name: "Form",
    component: () => import("../page/Form.vue"),
  },
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../page/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../page/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../page/Register.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../page/test.vue")
  },
  {
    path: "/memberCenter",
    name: "MemberCenter",
    component: () => import("../page/MemberCenter.vue")
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
