interface InputContainerProps {
  children: React.ReactNode;
}

export const InputContainer = ({ children }: InputContainerProps) => {
  return <div className="flex flex-col gap-1 mb-3">{children}</div>;
};
