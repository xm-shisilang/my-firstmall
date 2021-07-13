export default {
  addgoods(state, payLoad) {
    state.cartList.push(payLoad)
    // console.log(state.cartList);
  },
  increamentgoods(state, index) {
    state.cartList[index].goodscount += 1
    // console.log(state.cartList);
  },
  delCartGood(state, index) {
    state.cartList.splice(index, 1)
  },
  delAllGoods(state) {
    state.cartList = []
  },
  toselectnull(state) {
    for (let i = 0; i < state.cartList.length; i++) {
      state.cartList[i].checked = false
    }
  },
  toselectall(state) {
    for (let i = 0; i < state.cartList.length; i++) {
      state.cartList[i].checked = true
    }
  },
}