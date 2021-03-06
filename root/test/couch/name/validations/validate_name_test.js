'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/lib/validations/{%= name %}.js');

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

exports.validate = {
  setUp: function(done) {
    // setup here
    done();
  },
  'validate {%= name %} without error': function(test) {
    test.expect(1);
    test.doesNotThrow(function() {
      {%= js_test_safe_name %}.validate.apply({}, [{ type: '{%= name %}' }]);
    }, 'should pass validation');
    test.done();
  },
  'validate {%= name %} with error': function(test) {
    test.expect(1);
    test.throws(function() {
      {%= js_test_safe_name %}.validate.apply({}, [{}]);
    }, 'should not pass validation');
    test.done();
  }
};
