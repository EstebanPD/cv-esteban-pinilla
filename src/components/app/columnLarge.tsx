import "./app.scss";

type ColumnLargeProps = {
  children: React.ReactNode;
};

const ColumnLarge = ({ children }: ColumnLargeProps) => {
  return <div className="column-large">{children}</div>;
};

export default ColumnLarge;
