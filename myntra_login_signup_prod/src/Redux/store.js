import { loginReducer } from "./Login/reducer"
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { wishlistReducer } from "./Wishlist/reducer"
const rootreducer = combineReducers({
    loginred: loginReducer,
    wishlist:wishlistReducer,
})

const store = createStore(rootreducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);
    
export default store;
