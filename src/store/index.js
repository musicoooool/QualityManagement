// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//vuex中数据
const state = {
    add: {
        prod: '',
        proc: '',
        machine: '',
        operator: '',
        cartno: '',
        category: '',
        content: '',
        title: ''
    },
    //文章预览数据
    preview: '',
    previewMode: false,

    activeIndex: '',
    listId: '',
    user: {
        name: '',
        id: '',
        avatar: ''
    },
    articleId: {

    } //记录各分类的最大id
};

//同步事件
// const mutations = {
//  back() {
//    state.showList = true;
//  }
// };

//计算属性
// const getters = {
//  scoreLimit: (state) => {
//    let obj = {
//      excellent: 0,
//      good: 0
//    };
//    state.users.forEach((item) => {
//      obj.excellent += (item.value == '5');
//      obj.good += (item.value == '4');
//    });
//    return obj;
//  }
// };

//异步事件
// const actions = {
//  submit() {
//    var votes = [];
//    votes = state.users.map(function(item) {
//      return [item.name, item.dpt, item.value, isGM];
//    });
//    //console.log(JSON.stringify(votes));
//    state.voteNum[state.voteStep] = 1;
//    //state.back();
//    //write the data to localStorage
//    console.log('提交数据');
//  }
// };

export default new Vuex.Store({
    state,
    // mutations,
    // actions,
    // getters
});