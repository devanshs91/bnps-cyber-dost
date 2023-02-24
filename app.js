const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dev1227",
  database: 'cellcheck'
});
con.connect((err) => {
  if (err) throw err;
  console.log('COnnccted')
})
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

var checked = null

app.post('/formPost', (req,res)=> {
  con.query('SELECT * FROM celldata', function (error, results, field) {
    if (error) throw error;
    for (let i=0; i<results.length; i++) {
      console.log(req.body, req.body['emailid'], req.body['passwordin'], results[i]['Email'], results[i]['Password'])
      if (req.body['emailid'] == results[i]['Email'] && req.body['passwordin'] == results[i]['Password']) {
        res.json(checked)
        break
      } else {
        res.json(checked)
      }
    }
  });
})

app.get('/formCheck', (req,res) => {
  res.json(checked)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})