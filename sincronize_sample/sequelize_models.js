const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("testing", "user1", "password", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
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
});


sequelize.sync()
    .then(() => console.log("Modelos sincronizados"));

exports.sequelize = sequelize;
exports.Taller = Taller;

