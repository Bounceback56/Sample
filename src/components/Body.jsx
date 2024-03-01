/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Product from "./Product"
import {clothingProducts} from "../config"
import { useEffect, useState } from "react";
import { getFilteredProducts } from "../utils/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Body(){

    const searchText=useSelector((store)=>store.text.searchText)
    const [allproducts,setallproducts]=useState(clothingProducts)
    const [filteredproducts,setfilteredproducts]=useState(clothingProducts)
    
    useEffect(()=>{
       const filteredData=getFilteredProducts(searchText,allproducts);
       setfilteredproducts(filteredData);
    },[searchText]);
    
     
    return(
        <div className="parent-body-container flex flex-col justify-center items-center">
            <div className="child-body-container md:grid grid-cols-4 grid-rows-2">
            {
                filteredproducts.map((prod)=>{
                    return  <Link to={"/product/"+prod.id} key={prod.id}><Product {...prod} /></Link>;
               })
            }
            </div>
            <div className="blank-space"></div>
        </div>    
    )
}
export default Body