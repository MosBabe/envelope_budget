const express = require('express');
const app = express();
const router = require('./routes/envelopes');

app.use('/',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('App started on process.env.PORT || 3000');
});