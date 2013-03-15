'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/lib/updates/delete_{%= name %}.js');

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
  destroy: function(test) {
    test.expect(2);
    var doc = {%= js_test_safe_name %}.update({}, { uuid: 'myuuid' })[0];
    test.equal(doc._deleted, true, 'Type should be set');
    test.equal(typeof doc.deletedAt, 'number', 'deletedAt should be set');
    test.done();
  },
  response: function(test) {
    test.expect(4);
    var response = {%= js_test_safe_name %}.update({}, {})[1];
    test.equal(response.code, 303, 'code should be 303');
    test.equal(response.body, 'Redirecting', 'body should be "Redirecting"');
    test.equal(typeof response.headers, 'object', 'headers should be set');
    test.equal(response.headers.Location, '../../../_rewrite/{%= name %}', 'Location header should be set');
    test.done();
  }
};
