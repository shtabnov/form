import { useState } from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

function UserList({ users, delUser, editUser }) {
    const [modalActiveUL, setModalActiveUL] = useState(false);

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
                            />
                        );
                    })}
                </tbody>
            </table>
            <Modal active={modalActiveUL} setActive={setModalActiveUL}>
                <Form
                    setActive={setModalActiveUL}
                    action="edit"
                    editUser={editUser}
                />
            </Modal>
        </div>
    );
}

export default UserList;
