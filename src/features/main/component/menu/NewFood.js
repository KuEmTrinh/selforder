import React from "react";
import { useState } from "react";
import { storage } from "../../../../app/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
export default function NewFood() {
  const [imgUrl, setImgUrl] = useState(null);
  const [file, setFile] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);
  const createNewFood = (downloadURL) => {
    console.log(downloadURL);
  };
  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target[0]?.files[0]);
  };
  const handleSubmit = () => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          createNewFood(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <p className="componentTitle">Create New Food</p>
      <table>
        <tbody>
          <tr>
            <td>
              <p className="inputBoxTitle">Vietnamese</p>
            </td>
            <th>
              <div className="inputBox flex align-center">
                <input className="inputBoxEnter" />
              </div>
            </th>
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
                {/* <form onSubmit={handleSubmit}> */}
                <input type="file" onChange={handleFile} />
                <button className="button button-green" onClick={handleSubmit}>
                  Upload
                </button>
                {/* </form> */}
                {!imgUrl && (
                  <div className="outerbar">
                    <div
                      className="innerbar"
                      style={{ width: `${progresspercent}%` }}
                    >
                      {progresspercent}%
                    </div>
                  </div>
                )}
                {/* {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
              {imgUrl} */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <button className="button button-green" onClick={createFile}>
        Create
      </button> */}
    </div>
  );
}
