const PessoaService = require('../service/PessoaService');

module.exports = {

    getAll: async (req, res) => {

        let json = {
            error: '',
            result: []
        };

        let pessoas = await PessoaService.getAll();

        for (let i in pessoas) {

            json.result.push({

                id_pessoa: pessoas[i].id,
                nome: pessoas[i].nome,
                rg: pessoas[i].rg,
                cpf: pessoas[i].cpf,
                data_nascimento: pessoas[i].data_nascimento,
                data_admissao: pessoas[i].data_admissao,
                funcao: pessoas[i].funcao

            });

        }

        res.json(json);

    },

    getById: async (req, res) => {

        let json = {
            error: '',
            result: {}
        };

        let id_pessoa = req.params.id_pessoa;
        let pessoa = await PessoaService.getById(id_pessoa);

        if (pessoa) {

            json.result = pessoa;

        }

        res.json(json);

    },

    post: async (req, res) => {

        let json = {
            error: '',
            result: {}
        };

        let nome = req.body.nome;
        let rg = req.body.rg;
        let cpf = req.body.cpf;
        let data_nascimento = req.body.data_nascimento;
        let data_admissao = req.body.data_admissao;
        let funcao = req.body.funcao;

        if (nome && rg && cpf && data_nascimento && data_admissao) {

            let id_pessoa = await PessoaService.post(nome, rg, cpf, data_nascimento, data_admissao, funcao);
            json.result = {

                id_pessoa: id_pessoa,
                nome,
                rg,
                cpf,
                data_nascimento,
                data_admissao,
                funcao

            };

        } else {

            json.error = 'Campos não enviados!';

        }

        res.json(json);

    },

    put: async (req, res) => {

        let json = {
            error: '',
            result: {}
        };

        let id_pessoa = req.params.id_pessoa;
        let nome = req.body.nome;
        let rg = req.body.rg;
        let cpf = req.body.cpf;
        let data_nascimento = req.body.data_nascimento;
        let data_admissao = req.body.data_admissao;
        let funcao = req.body.funcao;

        if (id_pessoa && nome && rg && cpf && data_nascimento && data_admissao) {
            await PessoaService.put(id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao);
            json.result = {

                id_pessoa,
                nome,
                rg,
                cpf,
                data_nascimento,
                data_admissao,
                funcao

            };

        } else {

            json.error = 'Campos não enviados!';

        }

        res.json(json);

    },

    delete: async(req, res) =>{

        let json = {
            error: '',
            result: {}
        };

        await PessoaService.delete(req.params.id_pessoa);

        res.json(json);

    }

}