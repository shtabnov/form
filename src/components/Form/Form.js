import { useState } from "react";
import InputForm from "./InputForm";
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
        <>
            <h2>Add User</h2>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <InputForm
                    name="First Name"
                    type="text"
                    value={data.firstName}
                    onChange={(e) => handleInputChange(e, "firstName")}
                />

                <InputForm
                    name="Last Name"
                    type="text"
                    value={data.lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                />
                <InputForm
                    name="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => handleInputChange(e, "email")}
                />
                <InputForm
                    name="Phone"
                    type="tel"
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
                        Cancel
                    </button>

                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;
