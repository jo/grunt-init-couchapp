/* jshint -W025 */
function(doc, req) {
  return require('lib/shows/edit_{%= name %}').show(doc, req);
}
