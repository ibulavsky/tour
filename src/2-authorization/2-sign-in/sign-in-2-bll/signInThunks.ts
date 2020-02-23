import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../1-main/main-2-bll/store";
import {ISignInActions, loginError, loginSuccess, toogleIsFetching} from "./signInActions";
import {localStorageAPI, SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {setCookie} from "../../../7-helpers/cookies/cookies";
import {passwordCoding} from "../../../7-helpers/passwordCoding";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions>, getStore: IGetStore) => {

    };

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions>, getStore: IGetStore) => {
        try {
            dispatch(toogleIsFetching(true));
            const response = await SignInAPI.login(email, passwordCoding(password), rememberMe);
            dispatch(toogleIsFetching(false));
            if (response.data.error) {
                dispatch(loginError(response.data.error))
            } else {
                dispatch(loginSuccess(response.data));
                await localStorageAPI.saveToken(response.data.token);
                await setCookie('token', response.data.token, 345600)
            }
        } catch (e) {
            dispatch(toogleIsFetching(false));
            dispatch(loginError(e.response.data.error))
        }
    };


export const getUser = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions>, getStore: IGetStore) => {
        const token = await localStorageAPI.loadToken();
        const response = await SignInAPI.me(token);
        if (response.data.error) {
            dispatch(loginError(response.data.error))
        } else {
            dispatch(loginSuccess(response.data));
            await localStorageAPI.saveToken(response.data.token)
        }
    };
