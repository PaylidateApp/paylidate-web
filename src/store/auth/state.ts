import { LocalStorage } from 'quasar'

export interface AuthStateInterface {
  prop: boolean;
  user: object;
  account: object;
  token: string;
  page: Array<String>;
}

const state: AuthStateInterface = {
  prop: false,
  user: {},
  account: {},
  token: LocalStorage.getItem('paylidate_token') || '',
  page:[],
};

export default state;
