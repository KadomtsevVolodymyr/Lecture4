/*import dotenv from 'dotenv'
dotenv.config()

const getProducts = async() => {
  const response = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await response.json();

  return data;
};*/

const getProducts = async() => {
   try {
   const response = await fetch(`https://fakestoreapi.com/products`);
   const data = await response.json();
 
   return data;
   }
   catch (e) {
      return null;
    }
 };

let sortProducts = [];

const sortPriceHightToLower = () => {
  return (a, b) => a.price > b.price ? 1 : -1;
};

const sortCategoryByAlphabet = () => {
  return (a, b) => a.category > b.category ? 1 : -1;
};
 

getProducts().then(data => {
  sortProducts = data.slice()

  sortProducts
    .sort(sortPriceHightToLower())
    .sort(sortCategoryByAlphabet());
  console.log(sortProducts);
},
);
