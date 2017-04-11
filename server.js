var express = require('express');
var app = express();

app.use(express.static("public"));

//Server port
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App running on port 3000!");
})