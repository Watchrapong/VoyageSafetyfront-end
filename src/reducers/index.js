import { combineReducers } from "redux";
import registerReducer from "./register.reducer";
import loginReducer from "./login.reducer";
import appReducer from "./app.reducer";
import establishmentReducer from "./establishment.reducer";
import detailReducer from "./detail.reducer";
import staffReducer from "./staff.reducer";

export default combineReducers(
    {
    registerReducer ,
    loginReducer,
    appReducer,
    establishmentReducer,
    detailReducer,
    staffReducer
    }
    )