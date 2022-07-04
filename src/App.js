import axios from "axios";
import { useEffect, useState } from "react";
import { Posts } from "./components/Posts.jsx";
import { LeftSide } from "./components/LeftGrid/LeftSide.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = response.data;
      setUsers(users);
    };
    const getPosts = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const posts = response.data;
      setPosts(posts);
    };
    const getTodos = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const todos = response.data;
      setTodos(todos);
    };
    getUsers();
    getPosts();
    getTodos();
  }, []);

  return (
    <div className="mx-auto lg:max-w-8xl max-h-screen overflow-hidden ">
      <main className="grid grid-cols-2 gap-2">
        <LeftSide users={users} />
        <Posts posts={posts}>
          <Todos todos={todos} />
        </Posts>
      </main>
    </div>
  );
}

export default App;
