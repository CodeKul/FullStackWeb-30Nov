import React, { useState, useReducer } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [
          ...state.todoList,
          { todo: action.payload, completed: false },
        ],
      };
    case "strike-todo":
      return {
        todoList: state.todoList.map((t, id) =>
          id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    default:
      return state;
  }
}

//MobX,Redux,easy-peasy,react-redux
function TodoList() {
  const [todoItem, setTodoItem] = useState("");
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    completed: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: todoItem });
    setTodoItem("");
  };
  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
      </form>
      <div>
        {state.todoList.map((t, id) => (
          <p
            onClick={() => dispatch({ type: "strike-todo", payload: id })}
            style={{ textDecoration: t.completed ? "line-through" : "" }}
          >
            {t.todo}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

{
  /* <p
            key={id}
            onClick={() => {
              console.log("inside strike");
              dispatch({ type: "strike-todo", payload: id });
            }}
            style={{ textDecoration: completed ? "line-through" : "" }}
          >
            {t.todo}
          </p> */
}
