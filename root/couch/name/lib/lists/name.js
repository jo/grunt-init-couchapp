exports.list = function(head, req) {
  start({
    headers: {
      'Content-Type': 'text/html'
    }
  });
  send('<!DOCTYPE html><html lang=en>');
  send('<head><link rel=stylesheet href="../_rewrite/{%= name %}.css"></head><body>');
  send('<h1>Listing {%= title %}s</h1>');
  send('<ol>');
  var row;
  while(row = getRow()) {
    send('<li><a href="{%= name %}/' + row.id + '">' + row.key + '</a></li>');
  }
  send('</ol>');
  send('<p class=actions>Create a <a href="../_rewrite/{%= name %}/new">New {%= title %}</a> ');
  send('or go to the <a href="../_rewrite">Overwiew Page</a></p>');
};
