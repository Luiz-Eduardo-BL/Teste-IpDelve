const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-w-300 placeholder-w-500 text-w-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
  customClass?: string;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={labelFor} className="block text-sm font-medium text-w-700">
        {labelText}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required={isRequired}
        placeholder={placeholder}
        className={`${fixedInputClass} ${customClass}`}
      />
    </div>
  );
}
