import React from "react";

function Table({ data, handleDelete, handleEdit }) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>
              <b>Sr.No</b>
            </td>
            <td>
              <b>UserName</b>
            </td>
            <td>
              <b>Password</b>
            </td>
            <td>
              <b>Gender</b>
            </td>
            <td>
              <b>Edit</b>
            </td>
            <td>
              <b>Delete</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr>
                <td key={index}>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.gender}</td>

                <td
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </td>
                <td onClick={() => handleDelete(index)}>Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
