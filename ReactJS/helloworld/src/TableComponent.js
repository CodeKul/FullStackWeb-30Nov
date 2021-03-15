import React from "react";
class TableComponent extends React.Component {
  render() {
    let tableData = [
      {
        productName: "ABC",
        productQty: "XYZ",
        productPrice: 1000,
      },
      { productName: "ABC", productQty: "ewrrr", productPrice: 1000 },
      {
        productName: "56788",
        productQty: "XYZ",
        productPrice: 2000,
      },
    ];
    return (
      <div>
        <table>
          <tr>
            <th>ProductName</th>
            <th>ProductQty</th>
            <th>ProductPrice</th>
          </tr>
          {tableData.map((item, key) => (
            <tr key={key}>
              <td>{item.productName}</td>
              <td>{item.productQty}</td>
              <td>{item.productPrice}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default TableComponent;
