import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Custom from '@/components/Custom'
import EditNews from '@/components/EditNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/custom',
      name: 'Custom',
      component: Custom
    },
    {
      path: '/editnews',
      name: 'EditNews',
      component: EditNews
    }
  ]
})
