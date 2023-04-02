import React from 'react';
import Chart from '../../Components/Chart/Chart';
import "./singleProduct.css";
import { productData } from "../../data";
import UploadIcon from '@mui/icons-material/Upload';
import { Link } from 'react-router-dom';


const SingleProduct = () => {
  return (
    <div className='product'>
      <div className="single_product_header">
        <h1 className='single_product_header_title' >Product</h1>
        <Link to="/newProduct">
        <button className='single_product_header_btn'>Create Product</button>

        </Link>
      </div>

      <div className="single_products">
        <div className="single_products_salesInfo">
          <Chart data={productData} title="Sales Performance" dataKey="Sales" />
        </div>
        <div className="single_products_Info">
          <div className="single_products_Info_card">
            <div className="single_products_Info_img_title">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='card_image' />
              <span>Apple Airpods</span>
            </div>
            <div className="single_products_Info_data">
              <div className="spans">
                <span>Id :</span>
                <span className='span_value'>123</span>
              </div>
              <div className="spans">
                <span>Sales :</span>
                <span className='span_value'>5464</span>
              </div>
              <div className="spans">
                <span>Active :</span>
                <span className='span_value'>Yes</span>
              </div>
              <div className="spans">
                <span>Stock :</span>
                <span className='span_value'>265</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_products_update">
        <form className='update_form_data' >
          <div className="update_form_data_left">
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpod' />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="update_form_data_right">
            <div className="update_form_data_right_upload">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className='update_form_data_image'/>
              <label for="file">
                <UploadIcon/>
              </label>
              <input type="file" name="file" id="file" style={{display:"none"}} />
            </div>
            <button className='product_update_button'>Update</button>
          </div>
        </form>
      </div>



    </div>
  )
}

export default SingleProduct
