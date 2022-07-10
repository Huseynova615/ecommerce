//for Add item from Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload: product,
    }
}

//for Delete item from Cart
export const deleteCart = (product) =>{
    return {
        type: "DELETEITEM",
        payload: product,
    }
}