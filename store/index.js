export const state = () => ({
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      text: '',
      color: '#ff0'
    }
  ]
})

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.memoData = JSON.stringify(store.state.memoInfoList)
    })
  },
  (store) => {
    if (localStorage.memoData) {
      store.commit('initMemo', JSON.parse(localStorage.memoData))
    }
  }
]

export const mutations = {
  initMemo(state, memoData) {
    state.memoInfoList = memoData
  },
  addMemo(state) {
    // const lastMemo = state.memoInfoList[state.memoInfoList.length - 1]
    const lastMemo = state.memoInfoList[0]
    if (state.memoInfoList.posX) {
      state.memoInfoList = [
        ...state.memoInfoList,
        {
          posX: lastMemo.posX,
          posY: lastMemo.posY,
          text: '',
          color: '#ff0'
        }
      ]
    } else {
      state.memoInfoList = [
        ...state.memoInfoList,
        {
          posX: 20,
          posY: 20,
          text: '',
          color: '#ff0'
        }
      ]
    }
  },
  removeMemo(state, i) {
    state.memoInfoList = state.memoInfoList.filter((memo, index) => index !== i)
  },
  setText(state, { text, index }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          text
        }
      } else {
        return memoInfo
      }
    })
  },
  setColor(state, { color, index }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          color
        }
      } else {
        return memoInfo
      }
    })

    // map使わずにクローンして、色を変える方法
    // state.memoInfoList = [...state.memoInfoList]
    // state.memoInfoList[index] = {
    //   ...state.memoInfoList[index],
    //   color
    // }
  },
  dragMemo(state, { index, deltaX, deltaY }) {
    state.memoInfoList = state.memoInfoList.map((memo, i) => {
      if (i === index) {
        return {
          ...memo,
          posX: memo.posX + deltaX,
          posY: memo.posY + deltaY
        }
      } else {
        return memo
      }
    })
  }
}
