import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "/src/components/HelloWorld.vue";
import Home from "/src/components/IndexHome.vue";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
