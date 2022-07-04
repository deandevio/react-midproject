export const Todos = (props) => {
  const { todos } = props;
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <div className="border-2 border-indigo-600" key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </div>
  );
};
