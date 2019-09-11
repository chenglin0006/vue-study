import * as Util from '../../util/index'
const state = {
    yesOrNo:[]
};
const mutations = {
    getYesOrNo (state,data) {
        state.yesOrNo=data;
    }
};
const actions = {
    async getYesOrNo ({ commit, state }, argus) { 
        let reaultData = await Util.fetchFun({
            type:'get',
            url:'/productMeta/getYesNo',
        });
        let enumList = reaultData.result.data;
        argus&&argus.cb&&argus.cb(enumList);
        commit('getYesOrNo',enumList)
    }
};
const getters = {
    yesOrNoEnum: state => {
        let list  = [state.yesOrNo];
        list.forEach((ele)=>{
            ele.id = ele.index
        })
        return state.yesOrNo
    },
};
   
export default {
    state,
    mutations,
    actions,
    getters
}