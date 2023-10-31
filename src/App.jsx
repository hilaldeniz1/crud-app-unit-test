import { useState } from "react";
import List from "./components/List/UserList.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Mehmet",
      email: "mehmet65@gmal.com",
      age: 59,
    },
    {
      name: "Ali",
      email: "alihhtp@gmail.com",
      age: 34,
    },
  ]);

  const addUser = (user) => {
    setUsers(users.concat(user));
  };

  return (
    <div className="container">
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
}

export default App;
