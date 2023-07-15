import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// CORRECCION
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./reducer";
// // importar al reducer
// // O(R) -> Actions

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;

// viejo

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./reducer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
// export default store;
