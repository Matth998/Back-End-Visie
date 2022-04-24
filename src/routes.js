const express = require('express');
const router = express.Router();

const PessoaController = require('./controller/PessoaController');

router.get('/pessoas', PessoaController.getAll);
router.get('/pessoa/:id_pessoa', PessoaController.getById);
router.post('/pessoa', PessoaController.post);
router.put('/pessoa/:id_pessoa', PessoaController.put);
router.delete('/pessoa/:id_pessoa', PessoaController.delete);

module.exports = router;

