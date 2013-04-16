var http = require('http');
var port = process.env.port || 1337;
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {

    var parsedRequest = url.parse(request.url, true);
    var action = parsedRequest.pathname;

    if (action == '/nodejs_logo.png') {
       var img = fs.readFileSync('./nodejs_logo.png');
       response.writeHead(200, {'Content-Type': 'image/png' });
       response.end(img, 'binary');
    } else if(action == '/styles.css')
    {
        var styles = fs.readFileSync('./styles.css');
        response.writeHead(200, {'Content-Type': 'text/css' });
        response.end(styles);
    } else {
        response.writeHead(200, {'Content-Type': 'text/html' });
        {
            var pageContent =
                            '<!DOCTYPE html>' +
                            '<html>' +
                                '<head>' +
                                    '<title>Hello from Node.js</title>' +
                                    '<link href="styles.css" rel="stylesheet" type="text/css" />' +
                                '</head>' +
                                '<body>' +

                                    '<image src="nodejs_logo.png">' +

                                    '<br />' +
                                    // Todo:
                                    // Modify the greeting in server.js in the Visual
                                    //  Studio solution from “Hello from Node.js” to
                                    //  “Hello from Node.js in Windows Azure!”.
                                    '<h1>Hello from Node.js!</h1>' +
                                    '<br />' +

                                    '<p>Windows Azure is an open cloud platform that enables you to quickly build, deploy and manage applications ' +
                                    'across a global network of Microsoft-managed datacenters.You can build applications using any language, ' +
                                    'tool or framework. This web page is built using Node.js and deployed using Git.</p>' +

                                    '<p>Git is a popular, open source, distributed version control system. Windows Azure Web Sites allow you ' +
                                    'to enable a Git repository for your site, which allows you to quickly and easily push code changes ' +
                                    'to your site. Windows Azure Web Sites also support continuous deployment from your public GitHub ' +
                                    'or CodePlex repositories.</p>' +
                                '</body>' +
                            '</html>';
            response.write(pageContent);
            response.end();
       }
    }
}).listen(port);
