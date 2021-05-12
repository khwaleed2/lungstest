const routes = [
    {
        path: '/',
        component: () => import('../Views/Master.vue'),
        name: 'master'
    },
    {
        path: '/result',
        component: () => import('../Views/Results.vue'),
        name: 'result'
    },
]

export default routes;
