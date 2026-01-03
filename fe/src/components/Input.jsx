export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <label></label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
