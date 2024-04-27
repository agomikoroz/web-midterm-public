const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');

app.use(express.static('public'))

var con = mysql.createConnection({
  host: "DB_HOST",
  port: 3306,
  user: "DB_USER",
  password: DB_PASS
  database: DB_DB
})

// CONTROLLERS

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname+"/public/templates/home.html");
})


app.get("/search/**", (req, res) => {
  res.status(200).sendFile(__dirname+"/public/templates/search.html");
})


app.get("/detail/**", (req, res) => {
  res.status(200).sendFile(__dirname+"/public/templates/detail.html");
})


// REST CONTROLLERS

app.get("/api/description/:id", (req, res) => {
  con.connect(function(err) {
    if(err) throw err;

    const sql = "SELECT * FROM description WHERE product_id=" + req.params.id;
        
    con.query(sql, function (err, result) {
        if (err) throw err;

        res.status(200).send(result);

    });
})
})

app.get("/api/product/:category", (req, res) => {
  con.connect(function(err) {
    if(err) throw err;
    
    const sql = "select * from product where category like '%" + req.params.category.toLowerCase() + "%'";

    con.query(sql, function (err, result) {
        if (err) throw err;
        
        res.status(200).send(result);

    });

})
})

app.get("/api/productById/:id", (req, res) => {
  con.connect(function(err) {
    if(err) throw err;
    
    const sql = "select * from product where id=" + req.params.id;

    con.query(sql, function (err, result) {
        if (err) throw err;
        
        res.status(200).send(result);

    });

})
})

// START APPLICATION
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})