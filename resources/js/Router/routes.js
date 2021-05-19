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
    {
        path: '/admin',
        component: () => import('../Views/auth/Login.vue'),
        name: 'login',
        meta: { guest: true },
    },
    {
        path: '/admin-panel',
        component: () => import('../Views/admin/AdminPanel.vue'),
        name: 'adminPanel',
        meta: { requiresAuth: true },
    },
]

export default routes;
