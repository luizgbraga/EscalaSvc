const INITIAL_STATE = {
    selectedPage: 'home'
}

export default function page(state = INITIAL_STATE, action) {
    if(action.type === 'SET_PAGE') {
        return { ...state, selectedPage: action.page }
    } else {
        return state;
    }
}