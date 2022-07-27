const INITIAL_STATE = {
    selectedAno: 1
}

export default function ano(state = INITIAL_STATE, action) {
    if(action.type === 'SET_ANO') {
        return { ...state, selectedAno: action.ano }
    } else {
        return state;
    }
}