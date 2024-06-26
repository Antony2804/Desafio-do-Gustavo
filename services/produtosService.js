const { getData, cache } = require('../configs/cacheconfiguration');
const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const cacheKey = 'produtos';
    const query = 'SELECT * FROM produtos';
    const produtos = await getData(cacheKey, query);
    return produtos;
};

const update = async (produtos) => {
    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?';
    const isOk = await (await connection).execute(query,
        [produtos.nome, produtos.descricao, produtos.preco, produtos.data_atualizado, produtos.id]);
    if (isOk[0].affectedRows === 1) {
        cache.del('produtos'); // Invalida o cache após a atualização
    }
    return isOk[0].affectedRows === 1;
};

const save = async (produtos) => {
    const query = 'INSERT INTO produtos(nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query,
        [produtos.nome, produtos.descricao, produtos.preco, produtos.data_atualizado]);
    if (isOk[0].affectedRows === 1) {
        cache.del('produtos'); // Invalida o cache após a inserção
    }
    return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    if (isOk[0].affectedRows === 1) {
        cache.del('produtos'); // Invalida o cache após a remoção
    }
    return isOk[0].affectedRows === 1;
};

module.exports = {
    findAll,
    save,
    remove,
    update,
};
