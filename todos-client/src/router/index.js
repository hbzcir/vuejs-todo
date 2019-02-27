import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/todos',
        name: 'TodoPage',
        component: TodoPage
    }, {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }]
})