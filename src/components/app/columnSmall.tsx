import "./app.scss";

type ColumnSmallProps = {
  children: React.ReactNode;
};

const ColumnSmall = ({ children }: ColumnSmallProps) => {
  return <div className="column-small">{children}</div>;
};

export default ColumnSmall;
