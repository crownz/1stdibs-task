interface State {
  items: Item[];
  item: Item;
}

interface Item {
  image: string;
  price: Price;
  id: string;
  seller: { company: string; };
  title: string;
  measurements: {
    display: string;
  };
  description: string;
  creator: string;
}

interface Price {
amounts: {
  GBP: string;
  USD: string;
  EUR: string;
};
initial_amounts: any;
}

interface Window {
  preloadedData: any;
}

declare module '*.scss' {
  const content: any;
  export default content;
}