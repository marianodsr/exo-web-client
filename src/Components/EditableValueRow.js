import React, { useState, useRef, useEffect } from "react";
import EditButton from "./EditButton";
import ConfirmDiscardPair from "./ConfirmDiscardPair";

const EditableValueRow = ({
  confirmCallback,
  label,
  value,
  pre = null,
  post = null,
  rowColor = "bg-gray-200",
  textColor = "text-secondary",
  buttonColor = "bg-primary",
}) => {
  
  const [stateValue, setStateValue] = useState(value);
  const [editValue, setEditValue] = useState(stateValue);
  const [editMode, setEditMode] = useState(false);

  const onConfirm = async () => {
    try {
      await confirmCallback(editValue);
      setStateValue(editValue);
      setEditMode(false)
    } catch (e) {
      setEditValue(value)
      setEditMode(false);
    }
  };

  const onDiscard = () => {
    setEditValue(stateValue);

    setEditMode(false);
  };



  const onEditClick = () => {
    setEditMode(true)
  }

  return (
    <>
      <div
        className={`${textColor}  ${rowColor} font-bold text-xl flex items-center justify-center py-2`}
      >
        <h3>{label}</h3>
      </div>
      <div
        className={`${textColor}  ${rowColor} font-bold text-xl flex items-center justify-center py-2`}
      >
        {!editMode ? (
          <h3 className="flex space-x-1">{pre && <pre className="font-bold">{pre}</pre>}{stateValue}{post && <span className="font-bold">{post}</span> }</h3>
        ) : (
          <input
            type="text"
            className="w-3/4 text-center px-1 font-bold text-xl"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            ref={input => input && input.focus()}
          />
        )}
      </div>
      <div
        className={`${rowColor} flex items-center justify-center text-xl font-bold outline:none`}
      >
        {!editMode ? (
          <EditButton
            className={`${textColor} ${buttonColor} p-1 font-bold rounded max-h-full text-sm`}
            onClick={onEditClick}
          />
        ) : (
          <ConfirmDiscardPair onDiscard={onDiscard} onConfirm={onConfirm} />
        )}
      </div>
    </>
  );
};

export default EditableValueRow;
