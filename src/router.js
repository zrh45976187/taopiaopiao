import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Mine from './views/MineView'
import Bott from './views/Bott'
import Xiangqing from './views/xiangqing'
import Sousuo from './views/sousuo'

Vue.use(Router) // 将Router方法添加到vue构造函数中,并创建两个全局组件 router-link router-view



const router = new Router({
	 routes: [
	    {path: '/', name: 'home', component: Home,},
		{path: '/xiangqing', name: 'xiangqing', component: Xiangqing,props: true},
	    {path: '/about',name: 'about',component: About},
	    {path: '/mine',name: 'mine',component: Mine},
	    {path: '/bott',name: 'bott',component: Bott},
		{path: '/sousuo', name: 'sousuo', component: Sousuo,props: true},
	],
	linkExactActiveClass: 'coll'
})

export default router

