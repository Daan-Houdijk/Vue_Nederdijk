import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import NewsItemView from "./views/NewsItemView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/nieuws/:slug",
      component: NewsItemView
    }
  ]
});
