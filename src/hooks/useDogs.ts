import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default () => {
  let dogs: Array<string> = reactive([])

  async function getDog() {
    try {
      let dogObj = await axios.get('https://dog.ceo/api/breed/stbernard/images/random')
      dogs.push(dogObj.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => getDog())

  return { dogs, getDog }
}
