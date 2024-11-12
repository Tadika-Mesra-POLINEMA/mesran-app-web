interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ onClick, className = "", children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-neutral-0 p-[12px] ${className}`}
    >
      {children}
    </button>
  );
}
