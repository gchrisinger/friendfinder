var express = require('express');
var app = express ();

var PORT = process.env.PORT || 9335;

app. get('/',function(req,res){
    res.send('hello there')
})
app.listen(PORT, function() {
    console.log("app listening on port" + PORT);
})

