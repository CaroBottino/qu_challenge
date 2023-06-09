import { createRouter, createWebHashHistory } from "vue-router";

const NotFound = () => import("../pages/NotFound.vue");
const Home = () => import("../pages/Home.vue");
const Planets = () => import("../pages/Planets.vue");
const People = () => import("../pages/People.vue");
const Search = () => import("../pages/Search.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "QU challenge Bottino" },
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planets,
    meta: { title: "Planets" },
  },
  {
    path: "/people",
    name: "People",
    component: People,
    meta: { title: "People" },
  },
  {
    path: "/search/:p_criteria",
    name: "Search",
    component: Search,
    meta: { title: "Search" },
  },
  {
    path: "/notfound",
    component: NotFound,
    meta: { title: "NotFound Example" },
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  { path: "/:pathMatch(.*)", name: "bad-not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = `${to.meta.title}`;
  window.scrollTo(0, 0);
});

export default router;
