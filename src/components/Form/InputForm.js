function InputForm({ type, placeholder, value, name, onChange }) {
    return (
        <label>
            {name}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default InputForm;
