var fs = require("fs")
var path = require("path")

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function (err, files) {
    if (err) {
        return console.error(err)
    }
    files.forEach(function (file) {
        if (path.extname(file).slice(1) == ext) {
            console.log(file)
        }
    })
})