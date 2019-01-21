const express = require('express');
const app = express();
app.use(express.static(__dirname+'/html'));
app.use('/res',express.static('./res'));
app.listen(3000,res=>{
    console.log('server is running!')
})