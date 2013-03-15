/* jshint -W025 */
function(doc, req) {
  return require('lib/shows/{%= name %}').show(doc, req);
}
