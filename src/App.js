import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

function App() {
    const initialState = [
        {
            id: uuidv4(),
            firstName: "Andrey",
            lastName: "Shtabnov",
            email: "second88@bk.ru",
            phone: "89068885155",
        },
        {
            id: uuidv4(),
            firstName: "Yana",
            lastName: "Shtabnova",
            email: "yanotik23@mail.ru",
            phone: "89638816267",
        },
        {
            id: uuidv4(),
            firstName: "Eseniya",
            lastName: "Shtabnova",
            email: "shtabnova.ea@gmail.com",
            phone: "89655794970",
        },
        {
            id: uuidv4(),
            firstName: "Stphany",
            lastName: "Shtabnova",
            email: "shtabnova.sa@gmail.com",
            phone: "89655794874",
        },
    ];
    const [modalActive, setModalActive] = useState(false);
    const [users, setUsers] = useState(initialState);
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

    const redactionUser = (editUser) => {
        return setUsers(
            users.map((user) => {
                return user.id === editUser.id ? editUser : user;
            })
        );
    };

    return (
        <div className="App">
            <h1>One More Form from React</h1>
            <button className="open" onClick={() => setModalActive(true)}>
                Add User
            </button>
            <UserList
                users={users}
                delUser={delUser}
                redactionUser={redactionUser}
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <Form addUser={addNewUser} setActive={setModalActive} />
            </Modal>
        </div>
    );
}

export default App;
