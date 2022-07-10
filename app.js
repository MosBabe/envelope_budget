const express = require('express');
const app = express();

const envelopes = [
    {
      id: 1,
      title: "Rent",
      budget: 1000,
    },
    {
      id: 2,
      title: "Groceries",
      budget: 300,
    },
    {
      id: 3,
      title: "Entertainment",
      budget: 400,
    },
  ];


app.get('/', (req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('App started on Port 3000');
});