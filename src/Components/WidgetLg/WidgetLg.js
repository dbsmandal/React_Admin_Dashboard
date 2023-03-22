import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
