import React from 'react';
import Chart from '../../Components/Chart/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import './home.css';
import {userData} from "../../data"
import WidgetSm from '../../Components/WidgetSm/WidgetSm';
import WidgetLg from '../../Components/WidgetLg/WidgetLg';

const Home = () => {
  return (
    <div className='home_container'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="widget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home
