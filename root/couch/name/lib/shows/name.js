exports.show = function(doc, req) {
  var createdAt = new Date(doc.createdAt);
  var updatedAt = new Date(doc.updatedAt);

  return {
    body: [
      '<!DOCTYPE html><html lang=en>',
      '<head><link rel=stylesheet href="../../_rewrite/{%= name %}.css"></head><body>',
      '<h1>Showing {%= title %}</h1>',
      '<p><strong>ID:</strong> ' + doc._id + '</p>',
      '<p>Created at ' + createdAt + '</p>',
      '<p>Updated at ' + updatedAt + '</p>',
      '<form action="../../_rewrite/{%= name %}/' + doc._id + '/delete" method=POST>',
      '<p class=actions><a href="../{%= name %}/' + doc._id + '/edit">Edit {%= title %}</a>, ',
      '<a href="../{%= name %}">List {%= title %}s</a> ',
      'or <input type=submit value="Delete {%= title %}"></p>',
      '</form>'
    ].join('')
  };
};
