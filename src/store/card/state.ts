export interface CardStateInterface {
  prop: boolean;
  cards: Array<Object>;
  card: Object;
  

}

const state: CardStateInterface = {
  prop: false,
  cards: [],
  card: {},
 
};

export default state;
