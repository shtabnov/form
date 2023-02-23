import { useState } from "react";
import styles from "./Form.module.css";

function Form({ addUser, setActive }) {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addUser(data);
        setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
        setActive(false);
    };

    const handleInputChange = (text, name) => {
        setData({ ...data, [name]: text.target.value });
    };

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <label>
                First Name
                <input
                    type="text"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={(e) => handleInputChange(e, "firstName")}
                />
            </label>
            <label>
                Last Name
                <input
                    type="text"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => handleInputChange(e, "email")}
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    placeholder="Phone"
                    value={data.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                />
            </label>
            <div className={styles.actionForm}>
                <button
                    onClick={() => {
                        setActive(false);
                    }}
                >
                    Cancil
                </button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;
