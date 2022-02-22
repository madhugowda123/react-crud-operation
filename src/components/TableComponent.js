import React from "react";

function TableComponent() {
  const arr = [
    {
      slno: 1,
      name: "madhu",
      password: "Madhu@123",
    },
    {
      slno: 2,
      name: "manu",
      password: "Manu@123",
    },
    {
      slno: 1,
      name: "malli",
      password: "Malli@123",
    },
  ];

  return (
    <>
      <table>
        <tr>
          <th>SL.No</th>
          <th>NAME</th>
          <th>PASSWORD</th>
        </tr>
        {arr.map((data) => (
          <tr>
            <td>{data.slno}</td>
            <td>{data.name}</td>
            <td>{data.password}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default TableComponent;
