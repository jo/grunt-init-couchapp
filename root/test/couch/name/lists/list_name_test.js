'use strict';

var {%= js_test_safe_name %} = require('../../../../couch/{%= name %}/lib/lists/{%= name %}.js');

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
    test.expect(2);
    var result = [];
    global.send = function(str) {
      result.push(str);
    };
    var header;
    global.start = function(obj) {
      header = obj;
    };
    var rows = [{
      id: 'myid',
      key: 'mykey'
    }];
    global.getRow = function() {
      return rows.pop();
    };
    var expected = [
      '<!DOCTYPE html><html lang=en>',
      '<head><link rel=stylesheet href="../_rewrite/{%= name %}.css"></head><body>',
      '<h1>Listing {%= title %}s</h1>',
      '<ol>',
      '<li><a href="{%= name %}/myid">mykey</a></li>',
      '</ol>',
      '<p class=actions>Create a <a href="../_rewrite/{%= name %}/new">New {%= title %}</a> ',
      'or go to the <a href="../_rewrite">Overwiew Page</a></p>'
    ];
    {%= js_test_safe_name %}.list();
    test.equal(result.join(''), expected.join(''), 'should have been build expected result.');
    test.equal(header.headers['Content-Type'], 'text/html', 'should have send correct headers.');
    test.done();
  }
};
