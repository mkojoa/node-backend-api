// content hidden

//lib
const express = require('express');
const app = express();
const PORT =  process.env.PORT || 4000;

app.get('/', function (req,res) {
  res.send("To do api root")
});

app.listen(PORT ,function () {
  console.log("Am on prt" + PORT);
})
