exports.show = function(doc, req) {
  return {
    body: [
      '<!DOCTYPE html><html lang=en>',
      '<head><link rel=stylesheet href="../../../_rewrite/{%= name %}.css"></head><body>',
      '<h1>Editing {%= title %}</h1>',
      '<p><strong>ID:</strong> ' + doc._id + '</p>',
      '<form action="../../../_rewrite/{%= name %}/' + doc._id + '" method=POST>',
      '<p class=actions><input type=submit value="Save {%= title %}"> ',
      'or <a href="../../{%= name %}/' + doc._id + '">Show {%= title %}</a></p>',
      '</form>'
    ].join('')
  };
};
