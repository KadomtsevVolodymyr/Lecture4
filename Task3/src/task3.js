/*import dotenv from 'dotenv'
dotenv.config()

`${process.env.BACKEND_URL}/posts`
`${process.env.BACKEND_URL}/comments`
`${process.env.BACKEND_URL}/users`

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
  console.log(data);
}).catch(error => console.error(error));
*/

const getInformationFromUrl = async(url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  } catch (error){
    return error;
  }
};
 
let addPosts = [];
let addUsers = [];
let addComments = [];

getInformationFromUrl('https://jsonplaceholder.typicode.com/posts').then(dataPosts => {
  addPosts = [...dataPosts];
});

getInformationFromUrl('https://jsonplaceholder.typicode.com/comments').then(dataComments => {
  addComments = [...dataComments];
});

 
getInformationFromUrl('https://jsonplaceholder.typicode.com/users').then(dataUsers => {
 
  addUsers = [...dataUsers];
  console.log(addUsers);
 
  addUsers.map((elementUser) => {
    const arrayPosts = [];
 
    addPosts.map((elementPosts) => {

      const arrayComments = [];

      addComments.map((elementComments) => {

        if (elementComments.postId === elementPosts.id){
          arrayComments.push(elementComments);
          elementPosts.comments = arrayComments;
        }
      });


      if (elementUser.id === elementPosts.userId){
        arrayPosts.push(elementPosts);
        elementUser.posts = arrayPosts;
      }
    });

  });
});