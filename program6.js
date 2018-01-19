var mymodule = require("./mymodule6.js")

var dirname = process.argv[2]
var extension = process.argv[3]

mymodule(dirname, extension, function (err, files) {
    if (err) {
        console.error(err)
    }
    files.forEach(function (file) {
        console.log(file)
    })
})