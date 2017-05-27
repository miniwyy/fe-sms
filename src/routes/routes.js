import Login from '../views/login.vue'
import NotFound from '../views/404.vue'
import Home from '../views/home.vue'
import Table from '../views/table.vue'
import user from '../views/user.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/table', component: Table, name: '用户列表' },
            { path: '/user', component: user, name: '用户详情' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;