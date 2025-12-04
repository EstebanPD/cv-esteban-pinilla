import classNames from "classnames";
import "./app.scss";

type ColumnsGridProps = {
  children: React.ReactNode;
  right?: boolean;
  left?: boolean;
};

const ColumnsGrid = ({
  children,
  right = false,
  left = false,
}: ColumnsGridProps) => {
  const classes = classNames("columns-grid", {
    ["direction-left"]: !right,
    ["direction-right"]: right,
    ["align-middle"]: !left,
    ["align-start"]: left,
  });
  return <div className={classes}>{children}</div>;
};

export default ColumnsGrid;
