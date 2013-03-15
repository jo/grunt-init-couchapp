exports.filter = function(doc, req) {
  return (doc.type === '{%= name %}');
};
