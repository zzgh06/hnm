import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery){
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/zzgh06/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProduct({data}))
  };
}

function getProductDetail (id){
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/zzgh06/hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json()
    dispatch(productActions.getSingleProduct({data}))
  }
}

export const productAction={getProducts, getProductDetail}