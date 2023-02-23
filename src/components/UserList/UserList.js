import styles from "./UserList.module.css";

function UserList({ users }) {
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

                    {/* userItem */}

                    {users.map((el) => {
                        return (
                            <tr>
                                <td>{el.firstName}</td>
                                <td>{el.email}</td>
                                <td>{el.phone}</td>
                                <td>
                                    <div className={styles.listAction}>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
