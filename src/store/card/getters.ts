import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';

const getters: GetterTree<CardStateInterface, StateInterface> = {
  cards (state) { return state.cards },
 
};

export default getters;
