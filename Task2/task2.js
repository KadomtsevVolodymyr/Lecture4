'use strict';

import {getData} from './getData.js';


export const addTodo = async() => {
  try{

    const todosInfo = await getData('https://jsonplaceholder.typicode.com/todos');

    const usersInfo = await getData('https://jsonplaceholder.typicode.com/users');

    await usersInfo.map((elementUser) => {
     
      const arrayOfCompleteTodo = [];
   
      todosInfo.map((elementTodo) => {

        if (elementUser.id === elementTodo.userId && elementTodo.completed){

          arrayOfCompleteTodo.push(elementTodo);

          elementUser.todo = arrayOfCompleteTodo;

        }
      });
    });
console.log(usersInfo);
    return usersInfo;
  } 
  catch(error){
     
   return null
  }
};