/* jshint -W025 */
function(head, req) {
  return require('lib/lists/{%= name %}').list(head, req);
}
