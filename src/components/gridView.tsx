import { Box } from "@chakra-ui/react";
import { FC } from "react";

type GridViewProps = {
  rowElementsAmount: number;
};

export const GridView: FC<GridViewProps> = (props) => {
  const { rowElementsAmount } = props;
  const renderRowElements = (rowElementsAmount: number) => {
    return Array.from({ length: rowElementsAmount }).map((_, i) => {
      return (
        <Box
          key={`${i} ${new Date().getMilliseconds()}`}
          width="40px"
          height="40px"
          border="1px solid white"
          backgroundColor="white"
        ></Box>
      );
    });
  };

  return (
    <Box
      width="40%"
      margin="0 auto"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      padding={4}
    >
      {renderRowElements(rowElementsAmount)}
    </Box>
  );
};
