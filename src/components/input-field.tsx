interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const InputField = ({ className = "", ...props }: InputFieldProps) => {
  return (
    <input
      className={`border border-gray-300 rounded-md p-2 focus:outline-primary-base ${className}`}
      {...props}
    />
  );
};
