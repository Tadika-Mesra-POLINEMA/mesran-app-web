interface BoxLoaderProps {
  className?: string;
}

export const BoxLoader = ({ className = "" }: BoxLoaderProps) => {
  return (
    <div className={`box-loader ${className}`}>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
  );
};
