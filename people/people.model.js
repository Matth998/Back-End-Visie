const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        nome: { type: DataTypes.STRING, allowNull: false },
        rg: { type: DataTypes.STRING, allowNull: false },
        cpf: { type: DataTypes.STRING, allowNull: false },
        data_nascimento: { type: DataTypes.DATE, allowNull: false },
        data_admissao: { type: DataTypes.DATE, allowNull: false },
        funcao: { type: DataTypes.STRING}
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('pessoas', attributes, options);
}