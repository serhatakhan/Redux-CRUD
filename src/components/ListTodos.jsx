import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  // store'da tutulan veriye bu bileşende ihtiyaç var.
  // store'dan bu verinin tutulduğu ilgili reducer'a abone ol.
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
