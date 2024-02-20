const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const db = mysql.createConnection({
    host: "db",
    user: "root",
    password:"root",
    database: "nodedb"
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/', (req,res) => {
    const name = getName();
    const sql = `INSERT INTO people (name) VALUES ('${name}')`;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log(`Inserted name: ${name}`);
    });
    db.query('SELECT name FROM people', (err, results) => {
        if (err) throw err;
        const names = results.map(result => result.name).join('<br>');
        res.send(`<h1>Full Cycle Rocks!</h1><br>- Nomes cadastrados: <br> ${names}`);
    });
})

const getName = () => {
    const names = ["Luan","Pedro","Caio", "Mariana", "Lígia", "Rafaela", "Andrei Coelho", "Fulano Santos", "Ciclano Pedra"];
    const sobrenome =  ["Da silva","Dos santos","Pereira","Alves","Ferreira","De oliveira","Silva","Rodrigues","De souza","Gomes","Santos","Oliveira","Ribeiro","De jesus","Martins","Soares","Barbosa","Lopes","Vieira","Souza","Fernandes","Lima","Costa","Batista","De sousa","Dias","De lima","Do nascimento","Moreira","Nunes","Da costa","De almeida"];

    return names[Math.floor(Math.random() * names.length)] + " " + sobrenome[Math.floor(Math.random() * sobrenome.length)];
};

app.listen(port, () => {
    console.log("Rodando na porta " + port)
})