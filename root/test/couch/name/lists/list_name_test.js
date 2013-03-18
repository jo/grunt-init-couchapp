'use strict';

var {%= js_test_safe_name %} = require('lib/lists/{%= name %}.js');

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

exports.list = {
  setUp: function(done) {
    // setup here
    done();
  },
  '{%= name %}s': function(test) {
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
      id: 'mydoc',
      key: 'mykey'
    }];
    global.getRow = function() {
      return rows.pop();
    };
    var ctx = {
      lib: {
        templates: {
          'layout.html': '{{> partial}}'
        },
        lists: {
          templates: {
            '{%= name %}.html': 'urlRoot: {{{urlRoot}}}, {{#rows}}id: {{id}}, key: {{key}}{{/rows}}'
          }
        }
      }
    };
    var expected = 'urlRoot: ../_rewrite, id: mydoc, key: mykey';
    {%= js_test_safe_name %}.list.apply(ctx);
    test.equal(result.join(''), expected, 'should have been build expected result.');
    test.equal(header.headers['Content-Type'], 'text/html', 'should have send correct headers.');
    test.done();
  }
};
