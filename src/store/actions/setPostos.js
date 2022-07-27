export function delete_posto(name) {
    return {
        type: 'DELETE_POSTO',
        posto: name
    }
}

export function add_posto(nome, efetivo, prioridade) {
    return {
        type: 'ADD_POSTO',
        novoPosto: {
            nome: nome,
            efetivo: efetivo,
            prioridade: prioridade,
            archived: false
        }
    }
}

export function archive_posto(nome) {
    return {
        type: 'ARCHIVE_POSTO',
        posto: nome
    }
}

export function edit_posto(oldNome, nome, efetivo, prioridade) {
    return {
        type: 'EDIT_POSTO',
        atPosto: {
            nome: nome,
            efetivo: efetivo,
            prioridade: prioridade,
            archived: false
        },
        oldPosto: oldNome
    }
}