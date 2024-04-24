function getProducts(searchQuery){
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/zzgh06/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
  };
}

export const productAction={getProducts}