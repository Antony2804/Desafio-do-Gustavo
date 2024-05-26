const { getData, cache } = require('../configs/cachingconfiguration');
const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const cacheKey = 'clientes';
    const query = 'SELECT * FROM clientes';
    const clientes = await getData(cacheKey, query);
    return clientes;
};

const update = async (clientes) => {
    const query = 'UPDATE clientes SET nome = ? ,sobrenome = ?, email = ?, idade = ? WHERE id = ?';
    const isOk = await (await connection).execute(query,
        [clientes.nome, clientes.sobrenome, clientes.email, clientes.idade, clientes.id]);
    if (isOk[0].affectedRows === 1) {
        cache.del('clientes'); // Invalida o cache após a atualização
    }
    return isOk[0].affectedRows === 1;
};

const save = async (clientes) => {
    const query = 'INSERT INTO clientes(nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query,
        [clientes.nome, clientes.sobrenome, clientes.email, clientes.idade]);
    if (isOk[0].affectedRows === 1) {
        cache.del('clientes'); // Invalida o cache após a inserção
    }
    return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
    const query = 'DELETE FROM clientes WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    if (isOk[0].affectedRows === 1) {
        cache.del('clientes'); // Invalida o cache após a remoção
    }
    return isOk[0].affectedRows === 1;
};

module.exports = {
    findAll,
    save,
    remove,
    update,
};
