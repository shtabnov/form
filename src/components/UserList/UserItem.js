function UserItem({
    id,
    firstName,
    lastName,
    email,
    phone,
    styles,
    delUser,
    setActive,
    fillFields,
}) {
    return (
        <tr>
            <td>{`${firstName} ${lastName.substr(0, 1)}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <div className={styles}>
                    <button
                        onClick={() => {
                            fillFields(id);
                            setActive(true);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            delUser(id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
export default UserItem;
