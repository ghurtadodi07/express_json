const axios = require('axios');
const  osfile  = require('fs');
const Sequelize = require("sequelize");



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



async function makeRequest() {

    let config = {
        method : 'get',
        url    : 'https://prometeo-test.segurosatlas.com.mx/Catalogo/obtenerTalleres',
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGQ0pPTU9QUjIiLCJpZHByb3ZlZWRvciI6MzYwLCJuYmYiOjE2MzU5ODk0MTcsImFwYXRlcm5vIjoiVGVzdCIsImlzcyI6Im1pY3JvbmF1dCIsIm1vZHVsb3NhcHAiOlsiU2luaWVzdHJvIiwiIFNlZ3VpbWllbnRvIiwiIE1hcGFzIl0sImV4cCI6MTYzNjAyNTQxNywiYW1hdGVybm8iOiJUZXN0IiwiaWF0IjoxNjM1OTg5NDE3LCJub21icmUiOiJGQ0pPTU9QUjIiLCJyb2wiOiJPcGVyYWRvciJ9.yDeE1nmCaSZMEma6LnvArrxouG3jA-JKTxYhW5teZlM',
            'Content-Type': 'application/json'
            }}
  
    let res = await axios(config)
       console.log(res.data);
    res.data.resultado.respuesta.map(taller => {
        Taller.create({...taller}, (nuevoTaller) => {
            console.log("Nuevo taller creado: ", nuevoTaller);
        })
    })
    }

sequelize.sync()
    .then(() => {
        makeRequest();
            console.log(`Se sincronizo correctamente `);
         })