exports.show = function(doc, req) {
  var mustache = require('lib/vendor/mustache');

  return {
    body: mustache.render(this.lib.templates['layout.html'], {
      urlRoot: '../../_rewrite',
      id: doc._id,
      createdAt: new Date(doc.createdAt),
      updatedAt: new Date(doc.updatedAt)
    }, {
      partial: this.lib.shows.templates['{%= name %}.html']
    })
  };
};
