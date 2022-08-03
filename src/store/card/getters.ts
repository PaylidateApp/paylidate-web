import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';

const getters: GetterTree<CardStateInterface, StateInterface> = {
  cards (state) { return state.cards },
  payment (state) { return state.payment },
 
};

export default getters;
