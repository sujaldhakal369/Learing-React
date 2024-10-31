import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p>No task to do.</p>;
};

export default WelcomeMessage;
