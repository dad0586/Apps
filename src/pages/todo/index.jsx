import { useEffect, useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState(null); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data); 
      })
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo Ma'lumotlari</h1>
      {todo ? (
        <div>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Sarlavha:</strong> {todo.title}</p>
          <p>
            <strong>Bajarilganmi:</strong> {todo.completed ? "Ha" : "Yo'q"}
          </p>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default TodoApp;
