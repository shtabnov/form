import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [users, setUsers] = useState([]);
    const addNewUser = (user) => {
        user.id = uuidv4();
        setUsers([...users, user]);
    };

    const delUser = (id) => {
        setUsers(
            users.filter((user) => {
                return user.id !== id;
            })
        );
    };

    const editUser = (id) => {
        setModalActive(true);
        console.log(id);
    };

    return (
        <div className="App">
            <h1>One More Form from React</h1>
            <button className="open" onClick={() => setModalActive(true)}>
                Add User
            </button>
            <UserList users={users} delUser={delUser} editUser={editUser} />
            <Modal active={modalActive} setActive={setModalActive}>
                <Form addUser={addNewUser} setActive={setModalActive} />
            </Modal>
        </div>
    );
}

export default App;
