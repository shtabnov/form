import styles from "./InputForm.module.css";
function InputForm({ type, placeholder, value, name, onChange }) {
    return (
        <div className={styles.inputBox}>
            <input type={type} value={value} onChange={onChange} />
            <span>{name}</span>
        </div>
    );
}

export default InputForm;
