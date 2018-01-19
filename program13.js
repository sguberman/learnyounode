var url = require("url")
var http = require("http")

var port = process.argv[2]

function parsetime (time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    }
}

function unixtime (time) {
    return { "unixtime": time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url, true)
    var time = new Date(parsed.query.iso)
    var result
    
    if (parsed.pathname == '/api/parsetime') {
        result = parsetime(time)
    } else if (parsed.pathname == '/api/unixtime') {
        result = unixtime(time)
    }
    
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(port)