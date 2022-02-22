import {addTodo} from './task2';


global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve(),
  }));

beforeEach(() => {
  fetch.mockClear();
});

describe('sortProduct', () => {
  const usersInfo = [
    {
      id: 1, name: 'Jon',
    },
  ];
  const todosInfo = [{
    userId: 1, title: 'Test post', id: 1,
  }];

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(usersInfo),
      
    }));

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(todosInfo),
    }));
  });

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(todosInfo),
    }));
  });

  const final = [{
    id: 1, name: 'Jon', posts: {
      userId: 1, title: 'Test post', id: 1,
    },
  }];

  test('sortProduct', async() => {
    const result = await addTodo();

    expect(result).toEqual(final);
  });

});
