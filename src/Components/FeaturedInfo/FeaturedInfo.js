import React from 'react';
import './featuredInf.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4560</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSubTitle">Compare to last month</span>
        </div>
        <div className="featuredItems">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4560</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSubTitle">Compare to last month</span>
        </div>
        <div className="featuredItems">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4560</span>
                <span className="featuredMoneyRate">+1.4 <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredSubTitle">Compare to last month</span>
        </div>
      
    </div>
  )
}

export default FeaturedInfo
