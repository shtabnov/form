import { useState } from "react";
import InputForm from "./InputForm";
import styles from "./Form.module.css";

function Form({ addUser, setActive, users, action, editUser }) {
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
            <InputForm
                name="First Name"
                type="text"
                placeholder="First Name"
                value={data.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
            />

            <InputForm
                name="Last Name"
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
            />
            <InputForm
                name="Email"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => handleInputChange(e, "email")}
            />
            <InputForm
                name="Phone"
                type="tel"
                placeholder="Phone"
                value={data.phone}
                onChange={(e) => handleInputChange(e, "phone")}
            />
            <div className={styles.actionForm}>
                <button
                    type="reset"
                    onClick={() => {
                        setActive(false);
                    }}
                >
                    Cancil
                </button>
                {action === "submit" ? (
                    <button type="submit">Submit</button>
                ) : (
                    <button type="button" onClick={editUser}>
                        Save Edit
                    </button>
                )}
            </div>
        </form>
    );
}

export default Form;
