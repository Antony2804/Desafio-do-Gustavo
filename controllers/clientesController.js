const clientesService = require('../services/clientesService');
const findAll = async (request, response) => {
    const clientes = await clientesService.findAll();
    return response.status(200).json(clientes);
};

const save = async (request, response) => {
    const result = await clientesService.save(request.body);
    return result ?
        response.status(200).json() : response.status(400).json({ '[ERROR/SERVER]': 'Falha ao salvar clientes' });
};

const update = async (request, response) => {
    const result = await clientesService.update(request.body);
    return result ?
        response.status(200).json() : response.status(400).json({ '[ERROR/SERVER]': 'Falha ao atualizar clientes' });
};

const remove = async (request, response) => {
    const { id } = request.params;
    const result = await clientesService.remove(id);
    return result ?
        response.status(200).json() : response.status(400).json({ '[ERROR/SERVER]': 'Falha ao remover clientes' });
};

module.exports = {
    findAll,
    save,
    remove,
    update,
};


