'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/views/lib/{%= name %}.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.filter = {
  setUp: function(done) {
    // setup here
    done();
  },
  '{%= name %} doc': function(test) {
    test.expect(1);
    var result = [];
    global.emit = function(key, value) {
      result.push({
        key: key,
        value: value
      });
    };
    {%= js_test_safe_name %}.map({ type: '{%= name %}' });
    test.equal(result.length, 1, 'should emit doc.');
    test.done();
  },
  'no {%= name %} doc': function(test) {
    test.expect(1);
    var result = [];
    global.emit = function(key, value) {
      result.push({
        key: key,
        value: value
      });
    };
    {%= js_test_safe_name %}.map({ type: 'something' });
    test.equal(result.length, 0, 'should not emit doc.');
    test.done();
  }
};
