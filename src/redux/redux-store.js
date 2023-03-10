import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware  from "redux-thunk";
import appReducer from "./app-reducer";

let reducersBatch =  combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
    });

let store = legacy_createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;