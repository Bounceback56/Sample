/* eslint-disable react/prop-types */
export const CartItem = ({image, name , price}) => {
    return (
      <div className="w-60 h-74 flex flex-col border border-gray-300 rounded-md m-7 hover:shadow-lg transition duration-300 ease-in-out">
        <img
          className="object-cover w-full h-60"
          src={image}
          alt="food item"
        />
        <div className="p-4 overflow-hidden">
          <h2 className="text-lg font-bold">{name}</h2>
          <h3 className="text-sm">Price:{price}</h3>
        </div>
      </div>
    );
  };