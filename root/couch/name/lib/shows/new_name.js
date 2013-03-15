exports.show = function(doc, req) {
  return {
    body: [
      '<!DOCTYPE html><html lang=en>',
      '<head><link rel=stylesheet href="../../_rewrite/{%= name %}.css"></head><body>',
      '<h1>New {%= title %}</h1>',
      '<form action="../../_rewrite/{%= name %}" method=POST>',
      '<p><input type=submit value="Create {%= title %}"> ',
      'or <a href="../{%= name %}">List {%= title %}s</a></p>',
      '</form>'
    ].join('')
  };
};
