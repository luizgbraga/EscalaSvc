const INITIAL_STATE = {
    postos: [
        {
            nome: 'Plantão',
            efetivo: 6,
            prioridade: 1,
            archived: false
        },
    ]
}

export default function postos(state = INITIAL_STATE, action) {
    if(action.type === 'DELETE_POSTO') {
        let filteredPostos = state.postos.filter(el => el.nome !== action.posto);
        return {...state, postos: filteredPostos}
    } else if(action.type === 'ADD_POSTO') {
        state.postos.push(action.novoPosto);
        return state;
    } else if(action.type === 'ARCHIVE_POSTO') {
        let archivedPostos = state.postos.map(el => {
            if(el.nome === action.posto) {
                return {...el, archived: !el.archived}
            } else {
                return el;
            }
        });
        let orderedPostos = [];
        for(let el of archivedPostos) {
            if(!el.archived) {
                orderedPostos.push(el);
            }
        }
        for(let el of archivedPostos) {
            if(el.archived) {
                orderedPostos.push(el);
            }
        }
        return {...state, postos: orderedPostos};
        } else if(action.type === 'EDIT_POSTO') {
        let atPostos = state.postos.map(el => {
            if(el.nome === action.oldPosto) {
                return action.atPosto
            } else {
                return el;
            }
        });
        return {...state, postos: atPostos}
    } else {
        return state;
    }
}