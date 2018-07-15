import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Sellercenter from '@/components/Sellercenter'
import Buyercenter from '@/components/Buyercenter'
import Upcar from '@/components/Upcar'
import Upcarsuccess from '@/components/Upcarsuccess'
import Searchcar from '@/components/Searchcar'
import Carlist from '@/components/Carlist'
import Cardetail from '@/components/Cardetail'
import Appointcar from '@/components/Appointcar'
import Interiordetail from '@/components/Interiordetail'
import Upinterior from '@/components/Upinterior'
import Alllist from '@/components/Alllist'
import Appointfix from '@/components/Appointfix'
import Feedback from '@/components/Feedback'
import Fixhandle from '@/components/Fixhandle'
import Searchinterior from '@/components/Searchinterior'
import Shopdetail from '@/components/Shopdetail'
import Submitresult from '@/components/Submitresult'
import Trycarhandle from '@/components/Trycarhandle'
import Youlike from '@/components/Youlike'
import Upinteriorsuccess from '@/components/Upinteriorsuccess'
import Allorder from '@/components/Allorder'
import Shoplist from '@/components/Shoplist'
import Shopindex from '@/components/Shopindex'
// import Shoppingcart from '@/components/Shoppingcart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index', // 成为卖家买家
      name: 'Index',
      component: Index
    },
    {
      path: '/sellercenter', // 卖家中心
      name: 'Sellercenter',
      component: Sellercenter
    },
    {
      path: '/buyercenter', // 买家中心
      name: 'Buyercenter',
      component: Buyercenter
    },
    {
      path: '/upcar', // 车辆上新
      name: 'Upcar',
      component: Upcar
    },
    {
      path: '/upcarsuccess',
      name: 'Upcarsuccess',
      component: Upcarsuccess
    },
    {
      path: '/searchcar', // 车辆筛选
      name: 'Searchcar',
      component: Searchcar
    },
    {
      path: '/carlist',
      name: 'Carlist',
      component: Carlist
    },
    {
      path: '/cardetail',
      name: 'Cardetail',
      component: Cardetail
    },
    {
      path: '/appointcar',
      name: 'Appointcar',
      component: Appointcar
    },
    {
      path: '/interiordetail',
      name: 'Interiordetail',
      component: Interiordetail
    },
    {
      path: '/upinterior', // 内饰上新
      name: 'Upinterior',
      component: Upinterior
    },
    {
      path: '/alllist',
      name: 'Alllist',
      component: Alllist
    },
    {
      path: '/appointfix', // 包养维修
      name: 'Appointfix',
      component: Appointfix
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/fixhandle', // 预约处理
      name: 'Fixhandle',
      component: Fixhandle
    },
    {
      path: '/searchinterior', // 汽车内饰
      name: 'Searchinterior',
      component: Searchinterior
    },
    {
      path: '/shopdetail',
      name: 'Shopdetail',
      component: Shopdetail
    },
    {
      path: '/submitresult',
      name: 'Submitresult',
      component: Submitresult
    },
    {
      path: '/trycarhandle',
      name: 'Trycarhandle',
      component: Trycarhandle
    },
    {
      path: '/youlike', // 猜你喜欢
      name: 'Youlike',
      component: Youlike
    },
    {
      path: '/upinteriorsuccess',
      name: 'Upinteriorsuccess',
      component: Upinteriorsuccess
    },
    {
      path: '/allorder',
      name: 'Allorder',
      component: Allorder
    },
    {
      path: '/shoplist',
      name: 'Shoplist',
      component: Shoplist
    },
    {
      path: '/shopindex',
      name: 'Shopindex',
      component: Shopindex
    }
    // },
    // {
    //   path: '/shoppingcart',
    //   name: 'Shoppingcart',
    //   component: Shoppingcart
    // }

  ]
})
