import styles from "./InputForm.module.css";
function InputForm({ type, value, name, onChange }) {
    return (
        <div className={styles.inputBox}>
            <input type={type} value={value} onChange={onChange} required />
            <span>{name}</span>
        </div>
    );
}

export default InputForm;
