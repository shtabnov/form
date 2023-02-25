import styles from "./InputForm.module.css";
function InputForm({ type, placeholder, value, name, onChange }) {
    return (
        <label>
            {name} <br />
            <input
                className={styles.inputForm}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default InputForm;
