import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authentiCateReducer from "./reducers/authenticateReducer"

// let store = configureStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk)
// ));

const store = configureStore({
  reducer:{
    auth: authentiCateReducer,
    product: productSlice,
  }
})

export default store