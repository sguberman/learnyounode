var fs = require("fs")
var path = require("path")

module.exports = function (dirname, extension, callback) {
    fs.readdir(dirname, function (err, files) {
        if (err) {
            return callback(err)
        }
        callback(null, files.filter(function (file) {
            return path.extname(file).slice(1) == extension
        }))
    })
}