const INITIAL_STATE = {
    alunos: [
        { nome: 'Luiz Guilherme Amadi Braga', guerra: 'Braga', baixado: { state: false, dias: 0 }, tuCmdo: { state: true, funcao: 'Auxiliar de Comando'} },
        { nome: 'Alexandre de Paiva Almeida', guerra: 'Alexandre Paiva', baixado: { state: false, dias: 0 }, tuCmdo: { state: true, funcao: 'Furriel'} },
        { nome: 'João Vitor de Moura Gil', guerra: 'Gil', baixado: { state: false, dias: 0 }, tuCmdo: { state: true, funcao: 'Auxiliar de Sargenteante'} },
        { nome: 'Esdras Cavalcanti Almeida', guerra: 'Esdras', baixado: { state: true, dias: 0 }, tuCmdo: { state: true, funcao: 'Encarregado de Materiais'} },
        { nome: 'Guilherme Barreto Rollemberg Conrado', guerra: 'Conrado', baixado: { state: false, dias: 0 }, tuCmdo: { state: false, funcao: ''} }
    ]
}

export default function alunos(state = INITIAL_STATE, action) {
    if(action.type === 'EDIT_TUCMDO') {
        let withoutTuCmdo = state.alunos.map(function(el) {
            return {
                nome: el.nome,
                guerra: el.guerra,
                baixado: {
                    state: el.baixado.state,
                    dias: el.baixado.dias
                },
                tuCmdo: {
                    state: false,
                    funcao: ''
                }
            }
        });
        let withTuCmdo = withoutTuCmdo.map(function(el) {
            if(el.guerra === action.novaTuCmdo[0]) {
                return {
                    nome: el.nome,
                    guerra: el.guerra,
                    baixado: {
                        state: el.baixado.state,
                        dias: el.baixado.dias
                    },
                    tuCmdo: {
                        state: true,
                        funcao: 'Auxiliar de Comando'
                    }
                }
            } else if(el.guerra === action.novaTuCmdo[1]) {
                return {
                    nome: el.nome,
                    guerra: el.guerra,
                    baixado: {
                        state: el.baixado.state,
                        dias: el.baixado.dias
                    },
                    tuCmdo: {
                        state: true,
                        funcao: 'Encarregado de Materiais'
                    }
                }
            } else if(el.guerra === action.novaTuCmdo[2]) {
                return {
                    nome: el.nome,
                    guerra: el.guerra,
                    baixado: {
                        state: el.baixado.state,
                        dias: el.baixado.dias
                    },
                    tuCmdo: {
                        state: true,
                        funcao: 'Auxiliar de Sargenteante'
                    }
                }
            } else if(el.guerra === action.novaTuCmdo[3]) {
                return {
                    nome: el.nome,
                    guerra: el.guerra,
                    baixado: {
                        state: el.baixado.state,
                        dias: el.baixado.dias
                    },
                    tuCmdo: {
                        state: true,
                        funcao: 'Furriel'
                    }
                }
            } else {
                return el;
            }
        });

        return {...state, alunos: withTuCmdo}
    } else if(action.type === 'SET_BAIXADO') {
        let atAlunos = state.alunos.map(function(el) {
            if(el.nome == action.baixado) {
                return {
                    nome: el.nome,
                    guerra: el.guerra,
                    baixado: {
                        state: !el.baixado.state,
                        dias: el.baixado.dias
                    },
                    tuCmdo: {
                        state: el.tuCmdo.state,
                        funcao: el.tuCmdo.funcao
                    }
                } 
            } else {
                return el;
            }
        });

        return {...state, alunos: atAlunos}
    } else {
        return state;
    }
}