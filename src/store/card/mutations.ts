import { MutationTree } from 'vuex';
import { CardStateInterface } from './state';

const mutation: MutationTree<CardStateInterface> = {
  cards(state: CardStateInterface, data){
    state.cards = data
  },
  PaymentModel(state: CardStateInterface, data){
    state.PaymentModel = data
  },
  PaymentDetails(state: CardStateInterface, data){
    state.PaymentDetails = data
  },
};

export default mutation;
