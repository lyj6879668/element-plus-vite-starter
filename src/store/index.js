import {createStore} from "vuex";

const files = import.meta.glob('./modules/*.js')
const modules = {}
for(const path in files) {
  console.log(path)
}

const store = createStore({

})

export default store