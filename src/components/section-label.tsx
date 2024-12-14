interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <div className="px-4 py-2 bg-primary-10 rounded-full font-semibold text-base text-primary-base">
      {children}
    </div>
  );
};
