import * as Util from '../../util/index'
const state = {
    userName:'chenglin'
};
const mutations = {
    changeUserName (state,data) {
        state.userName=state.userName+(data.msg||'c')
    }
};
const actions = {
    async changeUserName ({ commit, state }, argus) { 
        let data = await Util.fetchFun(argus.payload);
        argus.cb&&argus.cb(data);
        commit('changeUserName',data)
    }
};
const getters = {
    userName: state => {
        return state.userName
    },
};
   
export default {
    state,
    mutations,
    actions,
    getters
}