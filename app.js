var http = require('http');
var url = require('url');
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var route = require('./route');
var serve = serveStatic('static');

http.createServer(onRequest).listen(3000);
console.log('Server has started');

function onRequest(request, response){
  var urlpath = url.parse(request.url).pathname;
  console.log('urlpath' + urlpath);
  serve(request, response, finalhandler(request, response));
  route.redir(response, urlpath);
}
