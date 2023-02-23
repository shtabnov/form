import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [users, setUsers] = useState([]);
    const addNewUser = (user) => {
        console.log(user);
        setUsers([...users, user]);
    };

    return (
        <div className="App">
            <h1>One More Form from React</h1>
            <button className="open" onClick={() => setModalActive(true)}>
                Add User
            </button>
            <UserList />
            <Modal active={modalActive} setActive={setModalActive}>
                <Form addUser={addNewUser} setActive={setModalActive} />
            </Modal>
        </div>
    );
}

export default App;
