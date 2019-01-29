const express = require('express');
const app = express();
app.use(express.static(__dirname+'../dist'));
app.use('../dist/assets', express.static('../dist/assets'));

app.listen(4200,res=>{
    console.log('server is running!')
})