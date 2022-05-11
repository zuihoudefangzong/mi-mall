/**
 * 商城Vuex-actions
 */
export default {
  saveUserName(context,username){
    console.log('进来了')
    context.commit('saveUserName', username);
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  }
}