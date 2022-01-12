import { MutationTree } from 'vuex';
import { AuthStateInterface } from './state';
import { LocalStorage } from 'quasar'

const mutation: MutationTree<AuthStateInterface> = {
  user(state: AuthStateInterface, data){
    state.user = data
  },

  account(state: AuthStateInterface, data){
    state.account = data
  },

  login(state: AuthStateInterface, data){
    LocalStorage.set('paylidate_token', data)
    state.token = data
  },

  logout(state: AuthStateInterface){
    LocalStorage.set('paylidate_token', '');
    state.user = [];
    state.token = '';
  },
};

export default mutation;
