export const state = () => ({
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      backgroundColor: ['yellow', 'green', 'blue', 'pink', 'orange'],
      text: 'Please input memo'
    }
  ]
})

// herokuにあげるとき、localStorage errorになるので一旦外す
// export const plugins = [
//   (store) => {
//     store.subscribe(() => {
//       localStorage.memoData = JSON.stringify(store.state.memoInfoList)
//     })
//   },
//   (store) => {
//     if (localStorage.memoData) {
//       store.commit('initMemo', JSON.parse(localStorage.memoData))
//     }
//   }
// ]

export const mutations = {
  initMemo(state, memoData) {
    state.memoInfoList = memoData
  },
  changeColor(state, index) {
    console.log(state)
    const memoColor = document.querySelector('.memo')
    memoColor.style.backgroundColor = state.memoInfoList[0].backgroundColor[index - 1]
    console.log(memoColor)
    // const lastMemo = state.memoInfoList[0]
    // state.memoInfoList[0].backgroundColor = 'blue'
    // lastMemo.backgroundColor = colorList[3]
    // console.log(lastMemo.backgroundColor)
    // console.log(state.memoInfoList)
    // console.log('changed color')
  },
  addMemo(state, index) {
    // const colorList = ['yellow', 'red', 'blue', 'green', 'pink']
    const lastMemo = state.memoInfoList[0]
    console.log(state)
    // const lastMemo = state.memoInfoList[state.memoInfoList.length - 1]
    if (state.memoInfoList.posX) {
      state.memoInfoList = [
        ...state.memoInfoList,
        {
          posX: lastMemo.posX,
          posY: lastMemo.posY,
          backgroundColor: lastMemo.backgroundColor[index - 1],
          text: ''
        }
      ]
    } else {
      state.memoInfoList = [
        ...state.memoInfoList,
        {
          posX: 20,
          posY: 20,
          backgroundColor: lastMemo.backgroundColor,
          text: ''
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
