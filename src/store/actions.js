export default {
  addCartGoods(context, payLoad) {
    return new Promise((resolve) => {
      if (context.state.cartList.length == 0) {
        context.commit('addgoods', payLoad)
        // state.cartList.push(payLoad)
        // console.log(state.cartList);
        resolve('添加新的商品~')
      } else {
        for (let index = 0; index < context.state.cartList.length; index++) {
          if (payLoad.iid === context.state.cartList[index].iid) {
            context.commit('increamentgoods', index)
            // state.cartList[index].goodscount += 1
            // console.log(state.cartList);
            resolve('当前商品数量+1~')
            break
          } else {
            if (index == context.state.cartList.length - 1) {
              context.commit('addgoods', payLoad)
              // state.cartList.push(payLoad)
              // console.log(state.cartList);
              resolve('添加新的商品~')
              break
            }
          }
        }
      }
    })

  },
  delCartGood(context, index) {
    context.commit('delCartGood', index);
  },
  delAllGoods(context) {
    context.commit('delAllGoods')
  },
  toselectnull(context) {
    context.commit('toselectnull')
  },
  toselectall(context) {
    context.commit('toselectall')
  },
}