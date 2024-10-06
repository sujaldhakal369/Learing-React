import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
