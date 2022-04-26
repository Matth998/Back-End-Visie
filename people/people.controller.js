const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const Role = require('_helpers/role');
const peopleService = require('./people.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    peopleService.getAll()
        .then(peoples => res.json(peoples))
        .catch(next);
}

function getById(req, res, next) {
    peopleService.getById(req.params.id)
        .then(people => res.json(people))
        .catch(next);
}

function create(req, res, next) {
    peopleService.create(req.body)
        .then(() => res.json({ message: 'people created' }))
        .catch(next);
}

function update(req, res, next) {
    peopleService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'people updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    peopleService.delete(req.params.id)
        .then(() => res.json({ message: 'people deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        nome: Joi.string().required(),
        rg: Joi.string().required(),
        cpf: Joi.string().required(),
        data_nascimento: Joi.string().required(),
        data_admissao: Joi.string().required(),
        funcao: Joi.string()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        nome: Joi.string().required(),
        rg: Joi.string().required(),
        cpf: Joi.string().required(),
        data_nascimento: Joi.string().required(),
        data_admissao: Joi.string().required(),
        funcao: Joi.string()
    });
    validateRequest(req, next, schema);
}
