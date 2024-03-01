/* eslint-disable react/prop-types */
function Product({name,price,image,sizes}){
    return (
      <div className="product-parent-container flex flex-col h-auto w-72 bg-white rounded-lg shadow-md border border-gray-300 p-4 hover:shadow-lg transition duration-300 ease-in-out">
        <img
          className="object-cover w-full h-60"
          src={image}
          alt="product-image"
        />
        <div className="p-4 overflow-hidden">
          <h2 className="text-lg font-bold">{name}</h2>
          <h3 className="text-lg">Price: {price}</h3>
          <h4 className="text-lg">Sizes:{sizes.join(",")}</h4>
        </div>
      </div>
    );
}
export default Product;
