import Vuex from 'vuex'
import app from './modules/app'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      app
    }
  })
}

export default createStore
