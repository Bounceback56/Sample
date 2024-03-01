import { clothingProducts } from "../config";

export const useSizes = (id) => {
    const product = clothingProducts.find((product) => product.id === parseInt(id));

    return { productInfo: product, sizes: product.sizes };
};
