const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const mysql_config = {
    host: "db",
    user: "root",
    password:"root",
    database: "nodedb"
};

const insert_query = `INSERT INTO people(name) values('pedro')`

const connection = mysql.createConnection(mysql_config)
connection.query(insert_query)
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle 4</h1>')
})

app.listen(port, () => {
    console.log("Rodando na porta " + port)
})