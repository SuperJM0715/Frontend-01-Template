var add = require('../dist/add.js');
var assert = require('assert');

// import {add} from "../src/add.js";
// import assert from "assert";

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('add', function () {
    it('add(3, 4) should be 7', function () {
        assert.equal(add.add(3, 4), 7);
    });
  });