'use strict';

var {%= js_test_safe_name %} = require('lib/shows/new_{%= name %}.js');

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

exports.show = {
  setUp: function(done) {
    // setup here
    done();
  },
  'new {%= name %}': function(test) {
    test.expect(1);
    var ctx = {
      lib: {
        templates: {
          'layout.html': 'layout-{{> partial}}'
        },
        shows: {
          templates: {
            'new_{%= name %}.html': 'new: urlRoot: {{{urlRoot}}}'
          }
        }
      }
    };
    var expected = 'layout-new: urlRoot: ../../_rewrite';
    test.equal({%= js_test_safe_name %}.show.apply(ctx).body, expected, 'should have been build expected result.');
    test.done();
  }
};
