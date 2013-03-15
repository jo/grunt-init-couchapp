exports.map = function(doc) {
  if (doc.type === '{%= name %}') {
    emit(doc._id, null);
  }
};
