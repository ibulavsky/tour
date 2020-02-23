import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../2-authorization/2-sign-in/sign-in-2-bll/signInReducer";
import {registerReducer} from "../../2-authorization/3-register/register-2-bll/registerReducer";
import {forgotReducer} from "../../2-authorization/4-forgot/forgot-2-bll/forgotReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
