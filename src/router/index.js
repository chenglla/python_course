import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const course = () => import('@/home/index')
const content = () => import('@/home/content')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },
    {
      path: '/course',
      components: {
        default: course
      },
      name: 'course',
      meta: { tab: 'course', title: 'course' }
    },
    {
      path: '/content',
      components: {
        default: content
      },
      name: 'content',
      meta: { tab: 'content', title: 'content' }
    }
  ]
})
