const { sq } = require("sequelize");
const { osFile} = require("fs")

osfile.writeFile("talleres.json",JSON.stringify(res.data),"utf8",(err) =>

const User = sequelize.define('Talleres', {
    // Model attributes are defined here
    tel3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rfc: {
      type: DataTypes.STRING
    },
    tel2: {
        type: DataTypes.STRING
    },
    anexo: {
        type: DataTypes.STRING
    },
    c: {
        type: DataTypes.STRING
    },
    oficinaregionalservicio: {
        type: DataTypes.STRING
    },
    oficinaregionalsistema: {
        type: DataTypes.STRING
    },
    indice_NORMALIZADO: {
        type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });

