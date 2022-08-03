import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthStateInterface } from './state';
import axios from 'axios';

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  async user ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/api/user')
      .then(response => {
        const data = response.data
          commit('user', response.data.data)
          commit('account', response.data.account)
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  },

  async product({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/api/product')
      .then(response => {
        const data = response.data
          commit('product', response.data.data)
          resolve(response);
        })
      .catch(err => {
        reject(err);
      });
    })
  },

  async account({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/api/account')
      .then(response => {
          const data = response.data
          commit('account', response.data.data)
          resolve(response);
        })
      .catch(err => {
        reject(err);
      });
    })
  }

};

export default actions;
