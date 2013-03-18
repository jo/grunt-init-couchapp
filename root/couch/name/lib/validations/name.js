exports.validate = function(newDoc, oldDoc, userCtx, secObj) {
  if (typeof newDoc.type !== 'string') {
    throw({ forbidden: 'Document must have a type.' });
  }
  if (newDoc.type === '{%= name %}') {
    // your validations here...
  }
};
