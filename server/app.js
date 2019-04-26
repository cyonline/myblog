const express = require('express');
const app = express();
app.use(express.static('../dist'));
app.use('/assets', express.static('../dist/assets'));

app.listen(4200,()=>{
    console.log('server is running!')
})