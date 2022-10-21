import { Box } from "@chakra-ui/react";
import { FC } from "react";

type RenderRowProps = {
  rowNumber: number;
  children: any;
};

export const RenderRow: FC<RenderRowProps> = (props) => {
  const { rowNumber, children } = props;

  const renderRow = (rowNumber: number) => {
    return Array.from({ length: rowNumber }).map((_, i) => {
      return <Box key={`${i} ${new Date().getMilliseconds()}`}>{children}</Box>;
    });
  };
  return <Box>{renderRow(rowNumber)}</Box>;
};
