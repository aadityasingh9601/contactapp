export default function Input({ name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label></label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
