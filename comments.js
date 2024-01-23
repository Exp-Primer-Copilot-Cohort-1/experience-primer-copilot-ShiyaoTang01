// Create web server

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'comments'
});

// Connect to mysql
connection.connect(function(error){
  if(!!error){
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

// Get comments
router.get('/', function(req, res){
  connection.query("SELECT * FROM comment", function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.json(rows);
    }
  });
});

// Get comment by id
router.get('/:id', function(req, res){
  connection.query("SELECT * FROM comment WHERE id = ?", [req.params.id], function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.json(rows);
    }
  });
});

// Post comment
router.post('/', function(req, res){
  connection.query("INSERT INTO comment SET ?", req.body, function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.json(rows);
    }
  });
});

// Put comment
router.put('/:id', function(req, res){
  connection.query("UPDATE comment SET ? WHERE id = ?", [req.body, req.params.id], function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.json(rows);
    }
  });
});

// Delete comment
router.delete('/:id', function(req, res){
  connection.query("DELETE FROM comment WHERE id = ?", [req.params.id], function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.json(rows);
    }
  });
});

module.exports = router;