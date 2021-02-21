const http = require('http');

http.createServer(function (req, res) {
    const theUrl = new URL(req.url, `http://${req.headers.host}/`);
    const queryParams = theUrl.searchParams;
    const pathName = theUrl.pathname;
    //console.log(queryParams);
    const theDate = new Date(queryParams.get('iso'));

    if (pathName === '/api/unixtime') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify({ "unixtime": theDate.getTime() }));
    }
    else if (pathName === '/api/parsetime') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify({
            hour: theDate.getHours(),
            minute: theDate.getMinutes(),
            second: theDate.getSeconds()
        }));
    } else {
        res.statusCode = 404;
        res.write('not found')
    }
    res.end();
}).listen(process.argv[2]);