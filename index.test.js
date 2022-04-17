/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import Product from './index.js';

test('get cross product', () => {
  const product = new Product();
  const productArray = product.getCrossProduct([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  expect(productArray).toStrictEqual([
    [1, 4],
    [1, 5],
    [1, 6],
    [2, 4],
    [2, 5],
    [2, 6],
    [3, 4],
    [3, 5],
    [3, 6],
  ]);
});

test('get cross product logic', () => {
  const product = new Product();
  const productArray = product.getCrossProductLogic([[1, 2], [7], [4]]);
  expect(productArray).toStrictEqual([
    [1, 7, 4],
    [2, 7, 4],
  ]);
});
