import React, { useState } from "react";
import Table from "./Table";
function Form() {
  //final object
  const [finalObj, setFinalObj] = useState({});
  //array to store object
  const [tableData, setTableData] = useState([]);
  //to toggle the button
  const [toggle, settoggle] = useState(false);
  //for edit perticular id
  const [tableId, setTableId] = useState(-1);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFinalObj((values) => ({ ...values, [name]: value }));
  };

  //to save data
  const handleSave = (e) => {
    settoggle(false);
    e.preventDefault();
    //to save edited data
    if (tableId > -1) {
      let temp = tableData;
      temp.splice(tableId, 1, finalObj);
      setTableData(temp);
      setTableId(-1);
      //to save new data
    } else if (finalObj.username && finalObj.password && finalObj.gender) {
      setTableData([...tableData, finalObj]);
    }
    setFinalObj({
      username: "",
      password: "",
    });
    e.preventDefault();
  };

  //to delete perticular row
  const handleDelete = (id) => {
    if (!toggle) {
      const updateddata = tableData.filter((ind) => {
        return ind !== id;
      });
      setTableData(updateddata);
    }
  };
  //to catch the value to edit from table component
  const handleEdit = (id) => {
    settoggle(true);
    setFinalObj(tableData[id]);
    setTableId(id);
  };

  return (
    <>
      <div>
        <h2>Form</h2>
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="username"
            value={finalObj.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="password"
            value={finalObj.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
        />
        <label for="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
        />
        <label for="female">Female</label>

        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onChange={(e) => handleChange(e)}
        />
        <label for="other">Other</label>
        <br />
        {toggle ? (
          <div>
            <button onClick={(e) => (handleSave(e).checked = false)}>
              Update
            </button>
          </div>
        ) : (
          <div>
            <button onClick={(e) => handleSave(e)}>Save</button>
          </div>
        )}
      </div>
      <br />
      <center>
        <Table
          data={tableData}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </center>
    </>
  );
}

export default Form;
