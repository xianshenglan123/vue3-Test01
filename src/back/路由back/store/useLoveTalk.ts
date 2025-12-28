import type { Toke } from '@/components/Toke'
import { defineStore } from 'pinia'
import axios from 'axios'
import { v1 } from 'uuid'
import { reactive } from 'vue'
// export const useLoveTalkStore = defineStore('loveTalk', {
//   state() {
//     return {
//       talkList: [
//         { id: '001', msg: '热爱可抵漫长岁月' },
//         { id: '002', msg: '你问我爱你值不值得，其实你应该知道，爱就是不问值不值得。' },
//         { id: '003', msg: '在我这里 你永远很重要' },
//       ] as Toke[],
//     }
//   },
// })

export const useLoveTalkStore = defineStore('loveTalk', () => {
  const talkList: Toke[] = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])

  async function getToke() {
    let { data } = await axios.get('https://api.zxki.cn/api/twqh')
    let toke = { id: v1(), msg: data }
    talkList.unshift(toke)
  }

  return { talkList, getToke }
})
