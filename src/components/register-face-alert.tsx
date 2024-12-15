interface RegisterFaceAlertProps {
  children: React.ReactNode;
  type: "success" | "error" | "warning" | "secondary";
  className?: string;
}

export const RegisterFaceAlert = ({
  children,
  type = "warning",
  className = "",
}: RegisterFaceAlertProps) => {
  return (
    <span
      className={`px-3 py-2 text-neural rounded-2xl border-2 text-neutral-90 ${getAlertColor(
        type
      )} ${className}`}
    >
      {children}
    </span>
  );
};

const getAlertColor = (type: RegisterFaceAlertProps["type"]) => {
  switch (type) {
    case "success":
      return "bg-success-10 border-success-30";
    case "error":
      return "bg-error-10 border-error-30";
    case "warning":
      return "bg-warning-10 border-warning-30";
    case "secondary":
      return "bg-neutral-10 border-neutral-30";
  }
};
