'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/lib/shows/{%= name %}.js');

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
    var now = new Date();
    var doc = {
       _id: 'mydoc',
       createdAt: now.getTime(),
       updatedAt: now.getTime()
    };
    var expected = {
      body: [
        '<!DOCTYPE html><html lang=en>',
        '<head><link rel=stylesheet href="../../_rewrite/{%= name %}.css"></head><body>',
        '<h1>Showing {%= title %}</h1>',
        '<p><strong>ID:</strong> mydoc</p>',
        '<p>Created at ' + now + '</p>',
        '<p>Updated at ' + now + '</p>',
        '<form action="../../_rewrite/{%= name %}/mydoc/delete" method=POST>',
        '<p class=actions><a href="../{%= name %}/mydoc/edit">Edit {%= title %}</a>, ',
        '<a href="../{%= name %}">List {%= title %}s</a> ',
        'or <input type=submit value="Delete {%= title %}"></p>',
        '</form>'
      ].join('')
    };
    test.equal({%= js_test_safe_name %}.show(doc).body, expected.body, 'should have been build expected result.');
    test.done();
  }
};
