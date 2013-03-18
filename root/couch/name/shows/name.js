/* jshint -W025 */
function() {
  return require('lib/shows/{%= name %}').show.apply(this, arguments);
}
