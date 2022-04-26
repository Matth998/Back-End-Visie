const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.people.findAll();
}

async function getById(id) {
    return await getPeople(id);
}

async function create(params) {
    // validate
    
    const people = new db.people(params);

    await people.save()
    
}

async function update(id, params) {
    // validate
    const people = await getById(id);

    Object.assign(people, params)
    await people.save();
    
}

async function _delete(id) {
    const people = await getPeople(id);
    await people.destroy();
}

// helper functions

async function getPeople(id) {
    const pessoa = await db.people.findByPk(id);
    if (!pessoa) throw 'people not found';
    return pessoa;
}
