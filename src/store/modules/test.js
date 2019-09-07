const state = {
    useName: "sam",
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],
    count: 11
};
const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    }
};
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync ({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            commit('increment')
            resolve()
            }, 1000)
        })
    }
};
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
};
   
// 不要忘记把state, mutations等暴露出去。
export default {
    state,
    mutations,
    actions,
    getters
}