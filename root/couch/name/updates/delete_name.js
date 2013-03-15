/* jshint -W025 */
function(doc, req) {
  return require('lib/updates/delete_{%= name %}').update(doc, req);
}
