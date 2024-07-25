import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className=" flex flex-row p-4 justify-between bg-slate-100 my-4 rounded-md">
      {children}
      <div className="flex flex-row align-center gap-4 items-center text-slate-800">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <FontAwesomeIcon
            className="cursor-pointer  hover:text-slate-500"
            icon={faPenToSquare}
          />
        </button>

        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <FontAwesomeIcon
            className="cursor-pointer  hover:text-slate-500"
            icon={faTrash}
          />
        </button>
      </div>
    </li>
  );
}
