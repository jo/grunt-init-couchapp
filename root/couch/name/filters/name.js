/* jshint -W025 */
function(doc, req) {
  return require('lib/filters/{%= name %}').filter(doc, req);
}
