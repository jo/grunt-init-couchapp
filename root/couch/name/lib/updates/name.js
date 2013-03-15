exports.update = function(doc, req) {
  doc = doc || {};

  for (var field in req.form) {
    doc[field] = req.form[field];
  }

  var create = !doc._id;
  doc._id = doc._id || req.uuid;
  doc.type = '{%= name %}';
  var now = new Date();
  doc.createdAt = doc.createdAt || now.getTime();
  doc.updatedAt = now.getTime();

  var response = {
    headers: {
      Location: (create ? '' : '../') + '../_rewrite/{%= name %}/' + doc._id
    },
    code: 303,
    body: 'Redirecting'
  };

  return [doc, response];
};
