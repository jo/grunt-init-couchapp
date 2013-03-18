'use strict';

var {%= js_test_safe_name %} = require('lib/shows/edit_{%= name %}.js');

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
  'edit {%= name %}': function(test) {
    test.expect(1);
    var doc = {
       _id: 'mydoc'
    };
    var ctx = {
      lib: {
        templates: {
          'layout.html': 'layout-{{> partial}}'
        },
        shows: {
          templates: {
            'edit_{%= name %}.html': 'edit: urlRoot: {{{urlRoot}}}, id: {{id}}'
          }
        }
      }
    };
    var expected = 'layout-edit: urlRoot: ../../../_rewrite, id: mydoc';
    test.equal({%= js_test_safe_name %}.show.apply(ctx, [doc]).body, expected, 'should have been build expected result.');
    test.done();
  }
};
