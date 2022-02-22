import {getData} from "./getData.js"

const sortPriceHightToLower = () => {
  return (a, b) => a.price - b.price;
};

const sortCategoryByAlphabet = () => {
   return (a, b) => a.category > b.category ? 1 : -1;
 };

export const sortProduct = async() => {
   try{
   const products = await getData(`https://fakestoreapi.com/products`);

   products
      .sort(sortPriceHightToLower())
      .sort(sortCategoryByAlphabet());

   return products;}
   catch(error){
      return null
   }
};