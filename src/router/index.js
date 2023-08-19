import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "/src/components/HelloWorld.vue";
import Home from "/src/components/IndexHome.vue";
import DefaultLayout from '/src/layouts/DefaultLayout.vue';

const routes = [
  {
    path: "/",
    name: "Public",
    component: DefaultLayout,
    redirect:'/',
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      }
    ]
  },
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
