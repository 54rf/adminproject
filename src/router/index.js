import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myheader from '@/components/myHeader'
import home from '@/page/home'
import businessCard from '@/page/businessCard'
import h5Shunt from '@/page/h5Shunt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myheader',
      name: 'myheader',
      component: myheader
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
      {
	      path: '/businessCard',
	      name: 'businessCard',
	      component: businessCard
	    },
      {
	      path: '/h5Shunt',
	      name: 'h5Shunt',
	      component: h5Shunt
	    }
      ]
    }
  ]
})
