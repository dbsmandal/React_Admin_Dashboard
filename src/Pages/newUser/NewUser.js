import React from 'react';
import "./newUser.css"

const NewUser = () => {
  return (
    <div className='new_User'>
      <h1 className='new_user_title'>New User</h1>
      <form className='form_data_newUser'>
        <div className="newUser_form">
          <div className="new_user_form_data">
            <label >Username</label>
            <input type="text" placeholder='dbsmandal' />
          </div>
          <div className="new_user_form_data">
            <label >Full Name</label>
            <input type="text" placeholder='Dipak Mandal' />
          </div>
          <div className="new_user_form_data">
            <label >Email</label>
            <input type="eail" placeholder='dipakmandal@gmail.com' />
          </div>
          <div className="new_user_form_data">
            <label >Password</label>
            <input type="text" placeholder='*******' />
          </div>
          <div className="new_user_form_data">
            <label >Mobile NO</label>
            <input type="Number" placeholder='+919734078407' />
          </div>
          <div className="new_user_form_data">
            <label >Address NO</label>
            <input type="text" placeholder='Ratua | Malda' />
          </div>
          <div className="new_user_form_data">
            <label >Gender</label>
            <select className='new_user_select' name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>

            </select>
          </div>
          <div className="new_user_form_data">
            <label >Active</label>
            <select className='new_user_select' name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button className='new_user_btn'>Create User</button>
      </form>

    </div>
  )
}

export default NewUser
