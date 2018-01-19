var http = require("http")

var callbacks = 0
var results = []

function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function HTTPGet (idx) {
    http.get(process.argv[idx + 2], function (response) {
        var allData = ""
        
        response.setEncoding("utf8")
        
        response.on("error", console.error)
        
        response.on("data", function (data) {
            allData += data
        })
        
        response.on("end", function () {
            results[idx] = allData
            callbacks++
            if (callbacks == 3) {
                printResults()
            }
        })
    })
}

for (var i = 0; i < 3; i++) {
    HTTPGet(i)
}