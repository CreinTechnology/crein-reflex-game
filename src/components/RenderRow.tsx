import { FC } from "react";

type RenderRowProps = {
  rowNumber: number;
  children: any;
};

export const RenderRow: FC<RenderRowProps> = (props) => {
  const { rowNumber, children } = props;

  const renderRow = (rowNumber: number) => {
    return Array.from({ length: rowNumber }).map((_, i) => {
      return <div key={i}>{children}</div>;
    });
  };
  return <div>{renderRow(rowNumber)}</div>;
};
