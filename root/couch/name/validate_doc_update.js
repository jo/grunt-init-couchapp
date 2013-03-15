/* jshint -W025 */
function(newDoc, oldDoc, userCtx, secObj) {
  if (typeof newDoc.type !== 'string') {
    throw({ forbidden: 'Document must have a type.' });
  }
  if (newDoc.type === '{%= name %}') {
    require('lib/validations/{%= name %}').validate(newDoc, oldDoc, userCtx, secObj);
  }
}
