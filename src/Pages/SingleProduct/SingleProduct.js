import React from 'react';
import Chart from '../../Components/Chart/Chart';
import "./singleProduct.css";
import { productData } from "../../data"

const SingleProduct = () => {
  return (
    <div className='product'>
      <div className="single_product_header">
        <h1 className='single_product_header_title' >Product</h1>
        <button className='single_product_header_btn'>Create Product</button>
      </div>

      <div className="single_products">
        <div className="single_products_salesInfo">
          <Chart data={productData} title="Sales Performance" dataKey="Sales"  />
        </div>
        <div className="single_products_Info">
          card
        </div>
      </div>
      <div className="single_products_update">
        update
      </div>



    </div>
  )
}

export default SingleProduct
