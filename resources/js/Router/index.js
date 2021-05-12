import VueRoutes from 'vue-router';
import routes from './routes';

const router = new VueRoutes({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
          x: 0,
          y: 0
        }
      }
})

export default router;
