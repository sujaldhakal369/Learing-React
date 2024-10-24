import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoDate={item.dueDate}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
