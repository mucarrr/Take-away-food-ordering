import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../redux/actions/cartActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };
  const handleDelete = () => {
    {
      product.amount === 1
        ? dispatch(removeItem(product.id))
        : dispatch(updateItem(product.id, product.amount - 1));
    }
  };
  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img src={product.photo} className="size-[115px] rounded-lg" />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-2xl font-semibold text-red-500">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}</p>
          <div className="flex items-center gap-2 justify-center border text-2xl rounded-lg">
            <button onClick={handleDelete} className="basket-btn">
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="min-w-[30px] text-center">{product.amount}</span>
            <button onClick={handleAdd} className="basket-btn">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
