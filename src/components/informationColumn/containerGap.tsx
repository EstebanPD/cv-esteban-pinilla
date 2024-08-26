import React from "react";
import "./informationColumn.scss";

type ContainerGapProps = {
  children: React.ReactNode;
};

const ContainerGap = ({ children }: ContainerGapProps) => {
  return <div className="container-gap">{children}</div>;
};

export default ContainerGap;
