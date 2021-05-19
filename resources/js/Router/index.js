import VueRoutes from 'vue-router';
import routes from './routes';
import store from "../Store";

const router = new VueRoutes({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next({ name: "login" })
    } else {
      next()
    }
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isLoggedIn) {
        next({ name: "adminPanel" });
        return;
      }
      next();
    } else {
      next();
    }
  })

export default router;
