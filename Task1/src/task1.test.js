import {sortProduct} from './task1';


global.fetch = jest.fn(() => 
   Promise.resolve({
      json: () => Promise.resolve(),
   }))

   beforeEach(() => {
      fetch.mockClear()
   })

describe('sortProduct', () => {
   beforeEach(() => {
  fetch.mockImplementationOnce(() => Promise.resolve({
     json: () => Promise.resolve([{category: 'b'}, {category: 'a'}]),
  }))
   })

   test('sortProduct', async() => {
      const result = await sortProduct();

      expect(result).toEqual([{category: 'a'}, {category: 'b'}])
   })

    });