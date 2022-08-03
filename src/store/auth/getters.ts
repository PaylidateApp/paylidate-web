import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthStateInterface } from './state';

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  user (state) { return state.user },
  account (state) { return state.account },
  isLoggedIn (state) { return state.token },
  isInpage (state) { return state.page },
};

export default getters;
