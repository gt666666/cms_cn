import * as Types from './mutation-types' // 引用操作模块
export default{
  [Types.SHOW] (state) { // 进行数据的修改操作
    state.showMessage = true
    console.log('show=' + state)
  },
  [Types.HIDE] (states) {
    states.showMessage = false
    console.log('hide=' + states.showMessage)
  },
  [Types.CHANGE] (state, val) {
    state.message = val
    console.log('change=' + state)
  }
}
