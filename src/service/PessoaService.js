const db = require('../db');

module.exports = {

    getAll: () => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM pessoas', (error, results) => {

                if (error) {
                    rejeitado(error);
                    return
                }
                aceito(results);
            });

        });

    },

    getById: (id_pessoa) => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM pessoas WHERE id_pessoa = ?', [id_pessoa], (error, results) => {

                if (error) {
                    rejeitado(error);
                    return
                }
                if (results.length > 0) {

                    aceito(results[0]);

                } else {

                    aceito(false);

                }
            });

        });

    },

    post: (nome, rg, cpf, data_nascimento, data_admissao, funcao) => {

        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO pessoas (nome, rg, cpf, data_nascimento, data_admissao, funcao) value (?,?,?,?,?,?)',
                [nome, rg, cpf, data_nascimento, data_admissao, funcao],
                (error, results) => {

                    if (error) {
                        rejeitado(error);
                        return
                    }
                    aceito(results.insertId_Pessoa);
                });

        });

    },

    put: (id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao) => {

        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE pessoas SET nome = ?, rg = ?, cpf = ?, data_nascimento = ?, data_admissao = ?, funcao = ? WHERE id_pessoa = ?',
                [nome, rg, cpf, data_nascimento, data_admissao, funcao, id_pessoa],
                (error, results) => {

                    if (error) {
                        rejeitado(error);
                        return
                    }
                    aceito(results);
                });

        });

    },

    delete: (id_pessoa) => {

        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM pessoas WHERE id_pessoa = ?', [id_pessoa],
                (error, results) => {

                    if (error) {
                        rejeitado(error);
                        return
                    }
                    aceito(results);
                });

        });

    }

};