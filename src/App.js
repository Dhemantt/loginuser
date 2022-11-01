import AddUser from "./components/users/AddUser";
import React, { useState } from "react";
import UserList from "./components/users/UserList";
function App() {

  const [userList, setEnteredUserList] = useState([])

  const AddUserHandler = (uName, uAge) => {
    setEnteredUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }
  console.log(userList);
  return (
    <div >
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
