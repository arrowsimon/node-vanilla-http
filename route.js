var fs = require('fs');
var routeMapDir = fs.readdirSync('views', 'utf-8')
var routeMap = []


routeMapDir.forEach(function(itm) {
  itm = itm.split('.');
  itm = [ '/'+itm[0], itm[0] ]
  routeMap.push(itm)
})

console.log(routeMap)
//var routeMapSplit = routeMapDir.split('.');

console.log(routeMapDir)

function redir(response, urlpath) {
  if (routeMap[urlpath]) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(fs.readFileSync('static/head.html','utf-8'));
    response.write(routeMap[urlpath]);
    response.write(fs.readFileSync('static/footer.html','utf-8'));
    response.end();
  }else {
    response.writeHead(404, {'Content-Type':'text/html'});
    response.write('404 Page Not Found');
    response.end();
  }
}

exports.redir = redir;
