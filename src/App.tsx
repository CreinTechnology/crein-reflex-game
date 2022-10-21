import {
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { GridView } from "./components/gridView";
import { RenderRow } from "./components/RenderRow";

const App = () => {
  const displayLifeInfo = (lifeAmount: number) => {
    return (
      <Box border="1px solid white" padding={3}>
        <Text color="white">Life: {lifeAmount}</Text>
      </Box>
    );
  };

  const displayPointsInfo = (pointsAmount: number) => {
    return (
      <Box border="1px solid white" padding={3}>
        <Text color="white">Points: {pointsAmount}</Text>
      </Box>
    );
  };

  const displayTimer = (time: number) => {
    return (
      <Box border="1px solid white" padding={3}>
        <Text color="white">Czas: {time}s</Text>
      </Box>
    );
  };

  return (
    <ChakraProvider>
      <Stack backgroundColor="#282c34" padding={4} minHeight="100vh">
        <Heading color="white" textAlign="center" padding={4}>
          Reflex
        </Heading>

        <Stack padding={4}>
          <HStack
            align="center"
            justifyContent="space-evenly"
            margin="0 auto"
            spacing={15}
          >
            {displayLifeInfo(3)}
            {displayPointsInfo(3)}
            {displayTimer(3)}
          </HStack>
        </Stack>

        <Stack>
          <RenderRow rowNumber={5}>
            <GridView rowElementsAmount={5} />
          </RenderRow>
        </Stack>
        <HStack align="center" justify="center" spacing={20}>
          <Button size="lg">Start</Button>
          <Button size="lg">Reset</Button>
        </HStack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
