const express = require("express");
const Sequelize = require("sequelize");
const fs = require("fs");

const app = express();

const PORT = 3001;

// Sequelize
const sequelize = new Sequelize("ormdb", "root", "patito123", {
    host: "localhost",
    dialect: "mysql"
})


sequelize.authenticate()
    .then(() => {
        console.log("Connection established succesfully");
    })
    .catch(err => {
        console.log("Unable to connect: ", err);
    })

const Taller = sequelize.define("Talleres", {
    tel3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rfc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anexo: {
        type: Sequelize.STRING,
    },
    hora: {
        type: Sequelize.STRING,
    },
    oficinaregionalsistema: {
        type: Sequelize.STRING,
        allowNull: false
    },
    oficinaregionalservicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indice_NORMALIZADO: {
        type: Sequelize.STRING
    }
})

app.get('/select', (_, res) => {
    Taller.findAll()
    .then(talleres => {
        res.send(talleres);
    })
});

sequelize.sync()
    .then(() => {

        fs.readFile("./talleres.json", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file: ", err);
            }
            console.log("JSON leido", data);
            
            JSON.parse(data).resultado.respuesta.map(taller => {
                Taller.create({...taller}, (nuevoTaller) => {
                    console.log("Nuevo taller creado: ", nuevoTaller);
                })
            })
        })
                
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })