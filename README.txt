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