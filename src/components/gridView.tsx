import { FC } from "react";
import "./gridViewStyles.css";

type GridViewProps = {};

export const GridView: FC<GridViewProps> = () => {
  const renderRowElement = (length: number) => {
    return Array.from({ length }).map((el, i) => {
      return <div key={i} className="row-element"></div>;
    });
  };

  return <div className="row">{renderRowElement(5)}</div>;
};
