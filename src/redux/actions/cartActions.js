import api from "../../api";
import ActionTypes from "../actionTypes";

export const getCart = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CART_LOADING });

    api
      .get("/cart")
      .then((res) =>
        dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err }));
  };
};

export const createItem = (product) => {
  return async (dispatch) => {
    const newItem = {
      id: product.id,
      category: product.category,
      title: product.title,
      price: product.price,
      photo: product.photo,
      amount: 1,
    };
    api
      .post("/cart", newItem)
      .then(() => dispatch({ type: ActionTypes.ADD, payload: newItem }));
  };
};

export const updateItem = (id, newAmount) => {
  return async (dispatch) => {
    api
      .patch(`/cart/${id}`, { amount: newAmount })
      .then((res) => dispatch({ type: ActionTypes.UPDATE, payload: res.data }));
  };
};
export const removeItem = (id) => {
  return async (dispatch) => {
    api
      .delete(`/cart/${id}`)
      .then(() => dispatch({ type: ActionTypes.DELETE, payload: { id } }));
  };
};
