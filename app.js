var express = require('express');
var app = express();
const { facebook } = require('./facebook')


app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.get('/test-face',facebook)

app.get('/test-face-2', function(res,resp){
  var json = JSON.stringify(res.query);

  if(res.query.code != undefined){
    console.log(json);
    console.log(res.query.state);
    facebook.dummyTest2(res.query.code,res,resp);
  }
  else{
    resp.send(json);
  }
})
