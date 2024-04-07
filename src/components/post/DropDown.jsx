import React, { useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const DropDown = ({ handleDelete, handleEdit }) => {
  const inputRef = useRef();
  return (
    <label className="popup">
      <input ref={inputRef} type="checkbox" />
      <div className="burger" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="popup-window">
        <legend>Aksiyonlar</legend>
        <ul>
          <li>
            <button
              onClick={() => {
                handleEdit();
                inputRef.current.checked = false;
              }}
            >
              <FiEdit2 />
              <span>Düzenle</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={handleDelete}>
              <TiDeleteOutline className=" text-red-600" />
              <span>Kaldır</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

export default DropDown;
