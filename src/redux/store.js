import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authentiCateReducer from "./reducers/authenticateReducer"

// let store = configureStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk)
// ));

const store = configureStore({
  reducer:{
    auth: authentiCateReducer,
    product: productReducer,
  }
})

export default store