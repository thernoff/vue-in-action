import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: iMain,
      component: Main,
      props: true // ожидает ли компонент каких-либо входных параметров
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true // ожидает ли компонент каких-либо входных параметров
    }
  ]
})