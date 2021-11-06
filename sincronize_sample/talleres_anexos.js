const axios = require("axios");
const  { Taller } = require("./sequelize_models");

const handleTalleres = (talleres) => {
    talleres.forEach((taller) => {
        Taller.create({...taller})
            .then(() =>
                console.log("Taller creado con idu: " + taller.idu)
            );
        requestAnexo(idu);
    });
};

const postAnexos = (idu) => {
    const config = {
        method: "post",
        url: `https://prometeo-test.segurosatlas.com.mx/Catalogo/catalogo/marcaSupAnexo/?idu=${idu}`,
        headers: {
            "authorization": "Bearer ...",
            "Content-Type": "application/json",
            "data": "Valid"
        }
    };

    return axios(config).then(res => res.data)
}

const getTalleres = () => {
    let config = {
        method: "get",
        url: "https://prometeo-test.segurosatlas.com.mx/Catalogo/obtenerTalleres",
        headers: {
            "authorization": "...",
            "Content-Type": "application/json"
        }
    };

    return axios(config).then( res => res.data )
};

// Implementamos la logica del programa:

getTalleres()
    .then(data => {
    data.resultado.respuesta.forEach( (taller) => {
        // Iteramos por cada taller     
        Taller.create({...taller})
        // Se puede implementar el post en la promesa 
        postAnexos(taller.idu)
            .then( data => {
                // Crear el nuevo anexo en la BD
            } )
    });
})

