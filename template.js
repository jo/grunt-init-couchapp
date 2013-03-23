/*
 * grunt-init-couchapp
 * https://github.com/jo/grunt-init-couchapp
 *
 * Copyright (c) 2013 Johannes J. Schmidt, TF
 * Licensed under the MIT license.
 */

'use strict';

var id = process.argv[3];

// Basic template description.
exports.description = 'Create a Couchapp.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Document ID_ must not start with an underscore. ' +
  'This is only the part after _design/.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You can now compile and push your document via `grunt deploy`';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = id ? '{couch,test/couch}/' + id + '/*' : '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({}, [
    // Prompt for these values.
    {
      name: 'name',
      message: 'Document ID',
      default: function(value, data, done) {
        var name = id;
        // Remove anything not a letter, number, dash, dot or underscore
        // and leading underscores
        name = name.replace(/[^\w\-\.]/g, '').replace(/^_+/, '');
        done(null, name);
      },
      validator: /^[^_]+/,
      warning: 'Must not start with an underscore.',
      sanitize: function(value, data, done) {
        // An additional value, safe to use as a JavaScript identifier.
        data.js_safe_name = value.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
        // An additional value that won't conflict with NodeUnit unit tests.
        data.js_test_safe_name = data.js_safe_name === 'test' ? 'myTest' : data.js_safe_name;
        // If no value is passed to `done`, the original property isn't modified.
        done();
      }
    },
    {
      name: 'title',
      message: 'Document title',
      default: function(value, data, done) {
        var title = data.name || '';
        title = title.replace(/[\W_]+/g, ' ');
        title = title.replace(/\w+/g, function(word) {
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
        done(null, title);
      } 
    }
  ], function(err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
