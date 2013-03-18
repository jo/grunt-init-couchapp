exports.show = function(doc, req) {
  var mustache = require('lib/vendor/mustache');

  return {
    body: mustache.render(this.lib.templates['layout.html'], {
      urlRoot: '../../_rewrite'
    }, {
      partial: this.lib.shows.templates['new_{%= name %}.html']
    })
  };
};
