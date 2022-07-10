const express = require('express');
const app = express();
const router = require('./routes/envelopes');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

app.use('/envelopes',router);
app.get('/',(req , res , next)=>{
    res.send("Hello, to get envelopes please check /envelopes");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('App started on process.env.PORT || 3000');
});