import "./app.scss";

type RowGridProps = {
  children: React.ReactNode;
  right?: boolean;
  alignStar?: boolean;
};

const RowGrid = ({ children }: RowGridProps) => {
  return <div className="row-grid">{children}</div>;
};

export default RowGrid;
