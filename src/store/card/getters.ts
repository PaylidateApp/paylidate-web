import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';

const getters: GetterTree<CardStateInterface, StateInterface> = {
  cards (state) { return state.cards },
  PaymentModel (state) { return state.PaymentModel},
  PaymentDetails (state) { return state.PaymentDetails},
};

export default getters;
