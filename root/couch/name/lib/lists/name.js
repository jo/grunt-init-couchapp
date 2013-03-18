exports.list = function(head, req) {
  var mustache = require('lib/vendor/mustache');

  start({
    headers: {
      'Content-Type': 'text/html'
    }
  });

  var view = {
    urlRoot: '../_rewrite',
    rows: []
  };
  var row;
  while (row = getRow()) {
    view.rows.push(row);
  }

  send(mustache.render(this.lib.templates['layout.html'], view, {
    partial: this.lib.lists.templates['{%= name %}.html']
  }));
};
