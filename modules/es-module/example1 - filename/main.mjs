import { test, describe } from 'node:test';
import assert from 'node:assert';
import { add, subtract } from './util.mjs';

describe('Calculator', function() {
    test('sum of 5 + 3 is 8', function() {
        assert.strictEqual(add(5, 3), 8);
    });

    test('subtraction of 5 - 3 is 2', function() {
        assert.strictEqual(subtract(5, 3), 2);
    });
});