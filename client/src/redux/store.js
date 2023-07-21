import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { jobsReducer } from './reducers/jobsReducer';
import { loaderReducer} from './reducers/loaderReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from './reducers/usersReducer';


const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  loaderReducer:loaderReducer,
  usersReducer:usersReducer,
})
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;

// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { legacy_createStore as createStore } from 'redux';
// import {applyMiddleware } from "redux";

// import thunk from "redux-thunk";
// import { jobsReducer } from "./reducers/jobsReducer";
// import { loaderReducer } from "./reducers/loaderReducer";
// import { usersReducer } from "./reducers/usersReducer";



// const rootReducer = combineReducers({
//   jobsReducer: jobsReducer,
//   loaderReducer : loaderReducer,
//   usersReducer: usersReducer,
// })

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
