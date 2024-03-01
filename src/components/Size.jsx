import { useParams } from "react-router-dom";
import { useSizes } from "../utils/useSizes";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

export const Size = () => {
  const [showPopup, setShowPopup] = useState(false);
  const params = useParams();
  const { id } = params;
  const { productInfo, sizes } = useSizes(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="popup mt-3">
        {showPopup && (
          <div className="popup">
            <p><strong>Item added to cart!</strong></p>
          </div>
        )}
      </div>
      <div className="size-parent-container flex justify-center items-center">
        {sizes.map((size, index) => (
          <div
            key={index}
            className="size-child-container flex flex-col h-auto w-72 bg-white rounded-lg shadow-md border border-gray-300 p-4 mr-10 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              className="object-cover w-full h-60"
              src={productInfo.image}
              alt="product-image"
            />
            <div className="p-4 overflow-hidden">
              <h2 className="text-lg">{productInfo.name}</h2>
              <h3 className="text-lg">Price: {productInfo.price}</h3>
              <h4 className="text-lg"><strong>Size: {size}</strong></h4>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => handleAddItem(productInfo)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="blank-space"></div>
    </div>
  );
};
