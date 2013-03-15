'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/lib/updates/{%= name %}.js');

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
  create: function(test) {
    test.expect(5);
    var doc = {%= js_test_safe_name %}.update(null, { uuid: 'myuuid' })[0];
    test.equal(doc.type, '{%= name %}', 'Type should be set');
    test.equal(doc._id, 'myuuid', 'ID should be set');
    test.equal(typeof doc.createdAt, 'number', 'createdAt should be set');
    test.equal(typeof doc.updatedAt, 'number', 'updatedAt should be set');
    test.equal(doc.createdAt, doc.updatedAt, 'updatedAt and createdAt should equal');
    test.done();
  },
  update: function(test) {
    test.expect(2);
    var doc = {%= js_test_safe_name %}.update({ _id: 'myid' }, {})[0];
    test.equal(doc._id, 'myid', 'id should left unchanged');
    test.equal(typeof doc.updatedAt, 'number', 'updatedAt should be set');
    test.done();
  },
  form: function(test) {
    test.expect(1);
    var doc = {%= js_test_safe_name %}.update(null, { form: { foo: 'bar' } })[0];
    test.equal(doc.foo, 'bar', 'foo property should be set from form object');
    test.done();
  },
  response: function(test) {
    test.expect(3);
    var response = {%= js_test_safe_name %}.update({}, {})[1];
    test.equal(response.code, 303, 'code should be 303');
    test.equal(response.body, 'Redirecting', 'body should be "Redirecting"');
    test.equal(typeof response.headers, 'object', 'headers should be set');
    test.done();
  },
  createHeaders: function(test) {
    test.expect(1);
    var response = {%= js_test_safe_name %}.update({}, { uuid: 'myid' })[1];
    test.equal(response.headers.Location, '../_rewrite/{%= name %}/myid', 'Location header should be set');
    test.done();
  },
  updateHeaders: function(test) {
    test.expect(1);
    var response = {%= js_test_safe_name %}.update({ _id: 'myid' }, {})[1];
    test.equal(response.headers.Location, '../../_rewrite/{%= name %}/myid', 'Location header should be set');
    test.done();
  }
};
