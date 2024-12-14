type InputLabelProps = React.HTMLProps<HTMLLabelElement>;

export const InputLabel = (props: InputLabelProps) => {
  return (
    <label
      className="block text-sm font-medium text-gray-700"
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
};
