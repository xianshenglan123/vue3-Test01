1、创建Vue 项目
  a、npm create vue@latest

2、自定义组建名称
  a、npm i vite-plugin-vue-setup-extend
  b、vite.comfig.ts中引入插件并在plugs块中调用该插件： plugins: [vue(), vueDevTools(), setupExtend()],

3、响应式数据
  a、ref()
    js中操作ref包裹的数据必须使用.value； 模板中则不需要使用.value
  b、reactive()
    不能直接重新赋值，只能使用 Object.assigne(person, {id:1,name:'zhangsan'})
  c、toRefs()、toRef()
    将响应式对象里面的数据取出并直接转换为响应式数据

4、计算属性    
  computed({ get(){},set(val){} })
  计算数学会对get中使用的值进行监控，只有当值有可能变化时才会重新计算,重复使用计算属性并不会触发重新计算 

7、propts, 父组件传递数据给自组件使用
  let props = withDefaults(defineProps<{ list: Persons }>(), {list: () => [{ id: "0", name: "佚名", age: 0 }]})

8、vue2的8个生命周期
  1、创建 2、挂载 3、更新 4、销毁

9、vue3的生命周期
  1、挂载 2、更新 3、销毁

10、Hooks 的使用
  hooks其实就是将相关的数据和方法封装到一个文件中并将其暴露出去
    export default () => {
      let dogs: Array<string> = reactive([])
      async function getDog() {
      }
      return { dogs, getDog }
   }
11、路由
  a、query传参可以使用 path或者name
    const routers = [
      {
        path: '/news',
        component: News,
        children: [
          {
            path: 'detail',
            component: Detail,
          },
        ],
      },
    ]

    <RouterLink
            :to="{
              path: '/news/detail',
              query: {
                id: item.id,
                title: item.title,
                content: item.content,
              },
            }">
            {{ item.title }}
    </RouterLink>

    <template>
      <div>{{ route.query.id }}</div>
      <div>{{ route.query.title }}</div>
      <div>{{ route.query.content }}</div>
    </template>
  b、params传参只能使用name,params传参不能传入二级对象或者数组
      const routers = [
        {
          path: '/news',
          component: News,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title/:content',
              component: Detail,
            },
          ],
        },
      ]

      <RouterLink
            :to="{
              name: 'xiangqing',
              params: {
                id: item.id,
                title: item.title,
                content: item.content,
              },
            }">
          {{ item.title }}
      </RouterLink>

      <template>
        <div>{{ route.params.id }}</div>
        <div>{{ route.params.title }}</div>
        <div>{{ route.params.content }}</div>
      </template>
  c、路由规则的props配置
      const routers = [
        {
          path: '/news',
          component: News,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title/:content',
              component: Detail,
              第一种写法
              props: true,
              第二种写法
                props(route) {
                  return route.params
                },
            },
          ],
        }
      ]

      let { id, title, content } = defineProps(['id', 'title', 'content'])
      <template>
        <div>{{ id }}</div>
        <div>{{ title }}</div>
        <div>{{ content }}</div>
      </template>
  d、编程式路由导航 -> 脱离 routerlink 实现路由跳转
    setTimeout(() => {
      router.push({
        path: '/news',
      })
    }, 3000)
13、pinia 集中式状态管理
  a、创建及挂载
  b、修改数据
  c、storeToRefs()
  d、getters
  e、subscript
  
  main.js 中配置 pinia
    import { createPinia } from 'pinia'
    app.use(createPinia())

  store.ts 中使用组合式方式设置 store
  export const useLoveTalkStore = defineStore('loveTalk', () => {
  const talkList: Toke[] = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])

    async function getToke() {
      let { data } = await axios.get('https://api.zxki.cn/api/twqh')
      let toke = { id: v1(), msg: data }
      talkList.unshift(toke)
    }

    return { talkList, getToke }
  })

  在组件中使用store
  let useTalkStore = useLoveTalkStore()
  useTalkStore.$subscribe((meteData, value) => {
    console.log(value.talkList)
    localStorage.setItem('talkList', JSON.stringify(value.talkList) as string)
  })

  let { talkList } = storeToRefs(useTalkStore)

  async function getToke() {
    useTalkStore.getToke()
  }

14、组件通信
  a、props 父子之间互相通信
  b、自定义事件