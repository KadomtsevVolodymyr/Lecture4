'use strict';

/*import dotenv from 'dotenv'
dotenv.config()

`${process.env.BACKEND_URL}/todos`
`${process.env.BACKEND_URL}/users`
*/

let addTodo = [];
let addUsers = [];

const getInformationFromUrl = async(url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();
     
    return data;
  } catch (error){
    return error;
  }
};

getInformationFromUrl('https://jsonplaceholder.typicode.com/todos').then(dataTodo => {
  addTodo = [...dataTodo];
});

getInformationFromUrl('https://jsonplaceholder.typicode.com/users').then(dataUsers => {

  addUsers = [...dataUsers];
  console.log(addUsers);

  addUsers.map((elementUser) => {
    const array = [];

    addTodo.map((elementTodo) => {
      if (elementUser.id === elementTodo.userId && elementTodo.completed){
        array.push(elementTodo);
        elementUser.todo = array;
      }
    });
  });
});