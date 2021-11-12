import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Father from'@/components/Usersub/Father'
import son from '@/components/Usersub/son'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/User/:userId/:name',
      component:User,
      children:
      [
        {
          path:'father',
          component:Father
        },
        {
          path:'son',
          component:son
        }
      ]
    }
  ]
})
