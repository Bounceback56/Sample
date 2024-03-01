export const getFilteredProducts=(searchText,allproducts)=>{
    const lowersearchtext=searchText.toLowerCase();
    const filterdata= allproducts.filter((prod) =>
    prod.name.toLowerCase().includes(lowersearchtext));
    return filterdata;
 }