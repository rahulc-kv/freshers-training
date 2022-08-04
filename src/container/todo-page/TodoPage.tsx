import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/reducers";
import { useAppDispatch } from "redux/store";
import { addToList, removeFromList } from "./slice";

const TodoPage = () => {
  const [todoItem, setTodoItem] = useState<string>('');

  const todoListReducer = useSelector((state: RootState) => state.rootReducer.todoListReducer)
  const dispatch = useAppDispatch();

  const inputChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
    setTodoItem(e.target.value)
  }

  const addNewItemHandler = () => {
    dispatch(addToList(todoItem));
    setTodoItem('');
  };

  const removeItemHandler = (todoItemId: string)=>{
    dispatch(removeFromList(todoItemId));
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <input
          placeholder="Todo Item"
          onChange={inputChangeHandler}
          value={todoItem}
          className="outline-none p-2 border-1 mr-2 border-gray-500 rounded-md"
        />
        <button
          type="button"
          className="bg-green-600 text-white p-2 rounded-md"
          onClick={addNewItemHandler}
        >
          Add To List
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        {todoListReducer.todoList.map((listItem) => (
          <div
            key={listItem.id}
            className="w-full flex flex-row justify-center items-center"
          >
            <div
              className="border-1 border-gray-400 bg-gray-200 p-4 w-2/4 text-center rounded-md m-2"
            >
              {listItem.value}
            </div>
            <button
              type="button"
              className="bg-red-600 text-white py-2 px-4 rounded-md h-14"
              onClick={() => removeItemHandler(listItem.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoPage;
