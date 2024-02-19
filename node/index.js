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

app.get('/', (req,res) => {
    const select_query = `SELECT * FROM people;`

    var names = '';

    const connection = mysql.createConnection(mysql_config)
    connection.query(select_query, function (err, result, fields) {
        result.map(value => names += "<p>" + value.name + "</p>")
        res.send("<h1>Full Cycle Rocks!</h1><br>" + names)
    });
    connection.end()
})

app.listen(port, () => {
    console.log("Rodando na porta " + port)
})