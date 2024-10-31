import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoDate={item.dueDate}
          TodoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
