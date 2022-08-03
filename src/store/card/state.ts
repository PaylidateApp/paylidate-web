export interface CardStateInterface {
  prop: boolean;
  cards: Array<Object>;
  card: Object;
  payment: Object;

  

}

const state: CardStateInterface = {
  prop: false,
  cards: [],
  card: {},
  payment: {},

  
 
};

export default state;
