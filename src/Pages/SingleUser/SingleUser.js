import React from 'react';
import "./singleuser.css"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import UploadIcon from '@mui/icons-material/Upload';
import { Link } from 'react-router-dom';
const SingleUser = () => {
  return (
    <>
      <div className='singleuser'>
        <h3 className='heading' >Edit User</h3>
        <Link to="/newUser">
        <button className='create_btn'>Create New User</button>
        </Link>
        
      </div>
      <div className="user_container">
        <div className="user_container_left">
          <div className="user_container_left_profile">
            <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" />
            <div className="user_container_left_info">
              <span className="user_container_left_username">
                Dipak Mandal
              </span>
              <span className="user_container_left_profession">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="acountDetails">
            <span className='acountDetails_title'>Acount Details</span>
            <div className="acountDetails_info">
              <span className='acountDetails_info_icons'>
                <PersonIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  dbsmandal
                </span>
              </span>
              <span className='acountDetails_info_icons'>
                <CalendarMonthIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  18.12.1996
                </span>
              </span>
            </div>
          </div>
          <div className="acountDetails">
            <span className='acountDetails_title'>Contact Details</span>
            <div className="acountDetails_info">
              <span className='acountDetails_info_icons'>
                <PhoneAndroidIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  +919734078407
                </span>
              </span>
              <span className='acountDetails_info_icons'>
                <EmailIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  dipakmandal@gmail.com</span>
              </span>
              <span className='acountDetails_info_icons'>
                <GpsFixedIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  Ratua | Malda                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="user_container_right">
          <span className="rightTitle">Edit</span>
            <form >
            <div className="form_data">
              <div className='form_data_left'>
                <label >Username</label>
                <input type="text" placeholder='Username' />
                <label >Full Name</label>
                <input type="text" placeholder='Full Name' />
                <label >Email</label>
                <input type="email" placeholder='Email' />
                <label >Mobile No</label>
                <input type="number" placeholder='Mobile NO' />
                <label >Address</label>
                <input type="text" />
              </div>
              <div className="form_data_right">
              <div className="form_data_right_profile">
                <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" style={{ height: 100, width: 100, borderRadius: 20 }} />
                <label htmlFor="uploadfile" style={{ cursor: 'pointer' }}  ><UploadIcon /></label>
                <input type="file" id="uploadfile" style={{ display: 'none' }} />
              </div>

              <button className='updateBtn'>Update Data</button>

            </div>
            </div>

            </form>
           

        </div>
      </div>
    </>
  )
}

export default SingleUser
