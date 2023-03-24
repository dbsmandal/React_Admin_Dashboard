import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from '../../data'
import './userList.css'
import { Link } from 'react-router-dom';



const UserList = () => {

  const [data, setData] = useState(userRows);

  
  const deleteUser = (userId) => {
    const newData = data.filter((item) => item.id !== userId);
    setData(newData);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username', headerName: 'Username', width: 130, renderCell: (params) => {
        return (
          <div className="userLists">
            <img className='tableImg' src={params.row.avatar} alt="" />
            <span className='tableUsername'>{params.row.username}</span>
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'status', headerName: 'Status', width: 100, },
    { field: 'transaction', headerName: 'Transactions', width: 100, },
    {
      field: 'actions', headerName: 'Actions', width: 130,
      renderCell: (params) => {
        return (
          <div className='actionBtns'>
            <Link to={`/user/${params.row.id}`}>
              <button
                className='editBtn'>Edit</button>
            </Link>

            <DeleteIcon
              onClick={() => deleteUser(params.row.id)}
              className='deleteBtn' />
          </div>
        )
      }
    },

  ];
  return (
    <div className='userList_table' >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default UserList
