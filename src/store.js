import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curModularTitle: '福利',
    curModularName: 'welfare',
    curModularType: '福利',
    scrollToTopLength: 0,
    modulars: [
      {
        title: '福利',
        name: 'welfare',
        type: '福利'
      },
      {
        title: '其他',
        name: 'others',
        type: 'Others'
      },
      {
        title: '关于我',
        name: 'about',
        type: 'About'
      }
    ],
    isShowImgDialog: false,
    imgDialogUrl: ''
  },
  mutations: {
    updateModular (state, modularName) {
      state.modulars.forEach(modular => {
        if (modular.name === modularName) {
          state.curModularTitle = modular.title
          state.curModularName = modular.name
          state.curModularType = modular.type
        }
      })
      console.log('模块切换:' + state.curModularTitle)
    },
    updateScrollToTop (state, num) {
      state.scrollToTopLength = num
    },
    updateImgDialogUrl (state, imgDialogInfo) {
      state.isShowImgDialog = imgDialogInfo.isShow
      state.imgDialogUrl = imgDialogInfo.imgUrl
    }
  },
  actions: {}
})
