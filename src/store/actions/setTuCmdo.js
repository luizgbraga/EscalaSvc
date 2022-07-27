export function edit_tucmdo(novoAuxCom, novoEncMat, novoAuxSgtte, novoFurriel) {
    return {
        type: 'EDIT_TUCMDO',
        novaTuCmdo: [novoAuxCom, novoEncMat, novoAuxSgtte, novoFurriel]
    }
}