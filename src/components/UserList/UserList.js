import styles from "./UserList.module.css";
import UserItem from "./UserItem";

function UserList({ users, delUser, editUser }) {
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
                                editUser={editUser}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
