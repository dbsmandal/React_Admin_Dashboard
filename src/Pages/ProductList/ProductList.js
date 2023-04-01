import React,{useState} from 'react';
import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from '../../data'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productRows);

  
    const deleteUser = (userId) => {
      const newData = data.filter((item) => item.id !== userId);
      setData(newData);
    }
  
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'product', headerName: 'Product', width: 130, renderCell: (params) => {
            console.log(params) 
          return (
            <div className="products_Lists">
              <img className='products_Lists_tableImg' src={params.row.img} alt="" />
              <span >{params.row.name}</span>
            </div>
          )
        }
      },
      { field: 'stock', headerName: 'Stock', width: 130 },
      { field: 'status', headerName: 'Status', width: 100, },
      { field: 'price', headerName: 'Price', width: 100, },
      {
        field: 'actions', headerName: 'Actions', width: 130,
        renderCell: (params) => {
          return (
            <div className='products_Lists_actionBtns'>
              <Link to={`/product/${params.row.id}`}>
                <button
                  className='products_Lists_editBtn'>Edit</button>
              </Link>
  
              <DeleteIcon
                onClick={() => deleteUser(params.row.id)}
                className='products_Lists__deleteBtn' />
            </div>
          )
        }
      },
  
    ];
    return (
      <div className='products_list_table' >
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

export default ProductList
