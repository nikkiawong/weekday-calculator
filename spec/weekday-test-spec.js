import { convertDay } from '../src/weekday.js';

describe('weekday calculator', function() {

it('should return the day of the week', function() {
  var day = '2018-10-03';
  expect(convertDay(day)).toEqual('Wednesday');
  });
});
