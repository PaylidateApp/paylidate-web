import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';
import axios from 'axios';

const actions: ActionTree<CardStateInterface, StateInterface> = {
  async cards ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/api/card')
      .then(response => {
        const data = response.data
          commit('cards', response.data.data)
          resolve(response);
        })
        .catch(err => {
          // commit('logout');
          reject(err);
        });
    });
  },
};

export default actions;
