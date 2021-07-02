import {ref} from 'vue'
export default function () {
  let count = ref(0)
  console.log(count.value)
  return {
    count
  }
}