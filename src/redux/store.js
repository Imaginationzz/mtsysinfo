import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";



import storage from "redux-persist/lib/storage";
import { registerReducer, signinReducer } from "./reducers";


const persistConfig = {
    key: "root",
    storage,
};

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({

    userState: signinReducer,
    userRegister: registerReducer,


});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export default () => {
    const store = createStore(
        persistedReducer,
        composedEnhancer(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};
