import {sortList} from './task1';

describe('createAdder', () => {
   test('the data is peanut butter', () => {
      return sortList().then(data => {
        expect(data).toBe('peanut butter');
      });
    });
});