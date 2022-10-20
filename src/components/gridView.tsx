import { FC } from "react";
import "./gridViewStyles.css";

type GridViewProps = {};

export const GridView: FC<GridViewProps> = (props) => {
  const renderRowElements = (length: number) => {
    return Array.from({ length }).map((_, i) => {
      return <div key={i} className="row-element"></div>;
    });
  };

  return <div className="row">{renderRowElements(5)}</div>;
};
