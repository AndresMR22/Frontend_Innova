const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist'));
app.all('*',function(req,res){
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 5000);