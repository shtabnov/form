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
            <td data-cell="name">{`${firstName} ${lastName.substr(0, 1)}`}</td>
            <td data-cell="email">{email}</td>
            <td data-cell="phone">{phone}</td>
            <td data-cell="action">
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
