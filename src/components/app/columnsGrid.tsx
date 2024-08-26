import classNames from "classnames";
import "./app.scss";

type ColumnsGridProps = {
  children: React.ReactNode;
  right?: boolean;
  alignStar?: boolean;
};

const ColumnsGrid = ({
  children,
  right = false,
  alignStar = false,
}: ColumnsGridProps) => {
  const classes = classNames("columns-grid", {
    ["direction-left"]: right == false,
    ["direction-right"]: right == true,
    ["align-start"]: alignStar == true,
    ["align-middle"]: alignStar == false,
  });
  return <div className={classes}>{children}</div>;
};

export default ColumnsGrid;
