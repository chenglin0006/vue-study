const state = {
    userName:'chenglin'
};
const mutations = {
    changeUserName (state,strObj) {
        state.userName=state.userName+(strObj.str||'c')
    }
};
const actions = {
    changeUserName ({ commit, state }, strObj) { 
        commit('changeUserName',strObj)
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