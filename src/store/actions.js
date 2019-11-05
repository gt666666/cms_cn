import * as Types from './mutation-types' // 引用操作模块
export default {
  showAction ({commit}) {
    console.log('showcommit=' + commit)
    commit(Types.SHOW)
  },
  hideAction ({commit}) {
    console.log('hidecommit=' + commit)
    commit(Types.HIDE)
  },
  changeAction ({commit}, newValue) {
    console.log('newValue=' + newValue)
    commit(Types.CHANGE, newValue)
  }
}
