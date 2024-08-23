const { add, subtract } = require('./calc.js');
const { describe, test } = require('node:test')
const assert = require('node:assert');

describe('Calculator', () => {
    test('the sum of 2 + 3 is 5', () => {
        assert.strictEqual(add(2,3), 5); 
    });

    test('the subtraction of 6 - 4 is is 2', () => {
        assert.strictEqual(subtract(6,4), 2); 
    });
})
