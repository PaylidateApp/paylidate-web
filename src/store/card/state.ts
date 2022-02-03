export interface CardStateInterface {
  prop: boolean;
  cards: Array<Object>;
  card: Object;
  PaymentDetails:Object,
  PaymentModel: boolean;

}

const state: CardStateInterface = {
  prop: false,
  cards: [],
  card: {},
  PaymentModel: false,
  PaymentDetails: {},
};

export default state;
