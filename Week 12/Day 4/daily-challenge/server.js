const express = require('express');
const app = express();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/form',express.static(__dirname+'/public'));

app.get('/pic/', function (req, res) {
  res.send('<img src="https://cdn.mos.cms.futurecdn.net/ZQiZNNSzhPVA3Tu7UDWLaR-1200-80.jpg">');
  console.log('picture');
});

app.post('/formData', function (req, res) {
  console.log(req.body);
    res.send(req.body.email + ' sent you a message: ' + req.body.message);
});

app.get('/aboutMe/:hobby',(req,res)=>{
  console.log(req.params);
  if (typeof req.params.hobby === 'string' || req.params.hobby instanceof String){
  res.send(req.params.hobby);
  }
  else {
    res.sendStatus(404);
  }
})

app.listen(3000, () => {
  console.log('listening port 3000')
});