/* jshint -W025 */
function(doc, req) {
  return require('lib/shows/new_{%= name %}').show(doc, req);
}
