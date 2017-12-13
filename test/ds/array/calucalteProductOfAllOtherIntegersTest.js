/*
* Assuming and array of integers calculate the product of all other intergers
* not including the current integer. Return an array of the products
*
* input  = [2, 3, 5, 1, 9]
* output = [3*5*1*9, 2*5*1*9, 2*3*1*9, 2*3*5*9, 2*3*5*1]
* output = [ 135, 90, 54, 270, 30 ]
*/

const {expect} = require('../../test-helper');
const {calucalteProductOfAllOtherIntegersTest} = require('../../../src/ds/array/calucalteProductOfAllOtherIntegersTest');

describe('Calculates Product of All Other Integers', function(){

    it('caluculates products when given array of integers', function(){
      const input  = [2, 3, 5, 1, 9];
      const output = [135, 90, 54, 270, 30];
      const products = calucalteProductOfAllOtherIntegersTest(input);

      expect(products.equals(output)).to.eq(true);
    });

    it('caluculates products when last integer === 0', function(){
      const input  = [2, 3, 5, 1, 0];
      const output = [0, 0, 0, 0, 30];
      const products = calucalteProductOfAllOtherIntegersTest(input);

      expect(products.equals(output)).to.eq(true);
    });

    it('caluculates products when first integer === 0', function(){
      const input  = [0, 3, 5, 1, 9];
      const output = [135, 0, 0, 0, 0];
      const products = calucalteProductOfAllOtherIntegersTest(input);

      expect(products.equals(output)).to.eq(true);
    });

    it('caluculates products when integer === 0 placed in the middle', function(){
      const input  = [2, 3, 0, 1, 9];
      const output = [0, 0, 54, 0, 0];
      const products = calucalteProductOfAllOtherIntegersTest(input);

      expect(products.equals(output)).to.eq(true);
    });

    it('caluculates products when  2 integer === 0', function(){
      const input  = [2, 3, 0, 1, 0];
      const output = [0, 0, 0, 0, 0];
      const products = calucalteProductOfAllOtherIntegersTest(input);

      expect(products.equals(output)).to.eq(true);
    });
});
