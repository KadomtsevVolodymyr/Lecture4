import dotenv from 'dotenv'
dotenv.config()

const getProducts = async() => {
  const response = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await response.json();

  return data;
};

const sortProducts = [];

const sortPriceHightToLower = () => {
  return (a, b) => a.price > b.price ? 1 : -1;
};

const sortCategoryByAlphabet = () => {
  return (a, b) => a.category > b.category ? 1 : -1;
};
 

getProducts().then(data => {

  data.forEach((el, i) => {
    sortProducts.push(data[i]);
  });

  sortProducts
    .sort(sortPriceHightToLower())
    .sort(sortCategoryByAlphabet());
},
);

console.log(sortProducts);
