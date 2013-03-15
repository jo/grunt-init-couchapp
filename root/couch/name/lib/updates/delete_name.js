exports.update = function(doc, req) {
  doc._deleted = true;
  var now = new Date();
  doc.deletedAt = now.getTime();

  var response = {
    headers: {
      Location: '../../../_rewrite/{%= name %}'
    },
    code: 303,
    body: 'Redirecting'
  };

  return [doc, response];
};
