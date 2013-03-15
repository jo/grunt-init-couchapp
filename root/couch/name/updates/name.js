/* jshint -W025 */
function(doc, req) {
  return require('lib/updates/{%= name %}').update(doc, req);
}
