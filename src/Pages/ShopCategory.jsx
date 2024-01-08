import React, { useContext } from "react";
import './Css/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item"

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="banners">
      <div className="banner-left">
        <p>Ultimate Discount</p>
        <h1>Super Sale</h1>
        <p>Up To 50% off</p>
        <div className="banner-btn">
          <div>Shop now</div>
          <i class='bx bxs-right-arrow-circle'></i>
        </div>
        </div>
        <div className="banner-right">
    <img className="shopcategory-banner" src={props.banner} alt="" />
    </div>
    </div>
    <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcategory-sort">
        Sort by <i class='bx bxs-chevron-down'></i>
      </div>
    </div>
    <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if (props.category===item.category){
          return <Item key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}/>
        } else {
          return null;
        }
      })}
    </div>
    </div>
  )
};

export default ShopCategory;
