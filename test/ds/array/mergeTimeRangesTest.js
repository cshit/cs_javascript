/*
* Assuming that {startTime: 1, endTime: 2} represent a meeting
* merge all metings that overlap or are adjacent in time into one. Returning
* and array of a set of merged meetings.
*/

const {expect} = require('../../test-helper');
const {mergeTimeRanges} = require('../../../src/ds/array/mergeTimeRanges');

describe('Merges time ranges from array of meeting objects', function(){

  it('merges adjacent meetings', function(){
      let input  = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];
      let output = [{startTime: 1, endTime: 3}];
      let result = mergeTimeRanges(input);

      expect(JSON.stringify(result)).to.equal(JSON.stringify(output));
  });

  it('ingnores inner meetings', function(){
      let input  = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];
      let output = [{startTime: 1, endTime: 5}];
      let result = mergeTimeRanges(input);

      expect(JSON.stringify(result)).to.equal(JSON.stringify(output));
  });

  it('Merge multiple cases', function(){
      let input  = [
          {startTime: 0,  endTime: 1},
          {startTime: 3,  endTime: 8},
          {startTime: 5,  endTime: 6},
          {startTime: 10, endTime: 12},
          {startTime: 9,  endTime: 10},
      ];

      let output = [
          {startTime: 0, endTime: 1},
          {startTime: 3, endTime: 8},
          {startTime: 9, endTime: 12}
      ];

      let result = mergeTimeRanges(input);

      expect(JSON.stringify(result)).to.equal(JSON.stringify(output));
  });

  it('Merge multiple cases in one when one meeting rule them all', function(){
      let input = [
          {startTime: 1, endTime: 10},
          {startTime: 2, endTime: 6},
          {startTime: 3, endTime: 5},
          {startTime: 7, endTime: 9},
      ];

      let output = [{startTime: 1, endTime: 10}];

      let result = mergeTimeRanges(input);

      expect(JSON.stringify(result)).to.equal(JSON.stringify(output));
  });
});
