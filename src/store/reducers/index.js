import { combineReducers } from "redux";

import ano from "./ano";
import page from "./page";
import postos from "./postos";
import alunos from "./alunos";

export default combineReducers({
    ano,
    page,
    postos,
    alunos
})