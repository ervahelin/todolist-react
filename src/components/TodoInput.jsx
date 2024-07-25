import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header className="w-full flex flex-row mb-10">
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        className="w-full p-4 mr-2 rounded-md bg-slate-100"
        type="text"
        placeholder="Enter todo ..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
        className="bg-slate-400 rounded-md p-4 w-32 transition hover:bg-slate-300"
      >
        Add
      </button>
    </header>
  );
}
