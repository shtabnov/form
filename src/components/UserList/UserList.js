import { useState } from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import Modal from "../Modal/Modal";
import EditForm from "../Form/EditForm";

function UserList({ users, delUser, redactionUser }) {
    const [modalActiveUL, setModalActiveUL] = useState(false);
    const [editUser, setEditUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        id: "",
    });

    const fillFields = (id) => {
        users.forEach((user) => {
            return user.id === id ? setEditUser(user) : false;
        });
    };

    return (
        <div className={styles.userList}>
            <p>user list</p>
            <table>
                <tbody>
                    <tr>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Phone number</td>
                        <td>Action User</td>
                    </tr>
                    {users.map((user) => {
                        return (
                            <UserItem
                                key={user.id}
                                {...user}
                                styles={styles.listAction}
                                delUser={delUser}
                                setActive={setModalActiveUL}
                                fillFields={fillFields}
                            />
                        );
                    })}
                </tbody>
            </table>
            <Modal active={modalActiveUL} setActive={setModalActiveUL}>
                <EditForm
                    setActive={setModalActiveUL}
                    editUser={editUser}
                    redactionUser={redactionUser}
                />
            </Modal>
        </div>
    );
}

export default UserList;
