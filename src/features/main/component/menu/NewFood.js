import React from "react";
import { useState } from "react";
import { storage } from "../../../../app/firebase";
export default function NewFood() {
  const [file, setFile] = useState("");
  const handleThisImage = (e) => {
    setFile(e.target.files[0]);
  };
  const createFile = () => {
    console.log(file);
  };
  return (
    <div>
      <p className="componentTitle">Create New Food</p>
      <table>
        <tr>
          <td>
            <p className="inputBoxTitle">Vietnamese</p>
          </td>
          <td>
            <div className="inputBox flex align-center">
              <input className="inputBoxEnter" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <p className="inputBoxTitle">Japanese</p>
          </td>
          <td>
            <div className="inputBox flex align-center">
              <input className="inputBoxEnter" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <p className="inputBoxTitle">Price</p>
          </td>
          <td>
            <div className="inputBox flex align-center">
              <input className="inputBoxEnter" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <p className="inputBoxTitle">Image</p>
          </td>
          <td>
            <div className="inputBox flex align-center">
              <input
                type="file"
                className="inputBoxEnter"
                onChange={handleThisImage}
              />
            </div>
          </td>
        </tr>
      </table>

      <button className="button button-green" onClick={createFile}>
        Create
      </button>
    </div>
  );
}
