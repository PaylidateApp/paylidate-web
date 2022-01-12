import { MutationTree } from 'vuex';
import { CardStateInterface } from './state';

const mutation: MutationTree<CardStateInterface> = {
  cards(state: CardStateInterface, data){
    state.cards = data
  },
};

export default mutation;
