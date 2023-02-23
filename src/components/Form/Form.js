import { useState } from "react";
import styles from "./Form.module.css";

function Form({ users, addNewUser }) {
    const [data, setData] = useState({});

    const formHandle = (event) => {
        event.preventDefault();
    };

    const labelHandle = (value) => {
        setData({
            ...data,
        });
    };

    return (
        <form className={styles.form} onSubmit={formHandle}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={labelHandle}
                />
            </label>
            <label>
                Last Name
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={labelHandle}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={data.email}
                    onChange={labelHandle}
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone"
                    value={data.phone}
                    onChange={labelHandle}
                />
            </label>
            <div className={styles.actionForm}>
                <button>Cancil</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;
