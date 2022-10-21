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
      <Box
        border="1px solid white"
        padding={3}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text fontWeight="semibold" fontSize="2xl" cursor="default">
          Life: {lifeAmount}
        </Text>
      </Box>
    );
  };

  const displayPointsInfo = (pointsAmount: number) => {
    return (
      <Box
        border="1px solid white"
        padding={3}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text cursor="default" fontWeight="semibold" fontSize="2xl">
          Points: {pointsAmount}
        </Text>
      </Box>
    );
  };

  const displayTimer = (time: number) => {
    return (
      <Box
        border="1px solid white"
        padding={4}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text
          cursor="default"
          fontWeight="semibold"
          color="black"
          fontSize="2xl"
        >
          Czas: {time}s
        </Text>
      </Box>
    );
  };

  return (
    <ChakraProvider>
      <Stack backgroundColor="#282c34" padding={4} minHeight="100vh">
        <Heading as="h1" color="white" textAlign="center" padding={4}>
          Reflex
        </Heading>

        <Stack padding={4}>
          <HStack
            align="center"
            justifyContent="space-evenly"
            margin="0 auto"
            spacing={20}
          >
            {displayLifeInfo(3)}
            {displayTimer(60)}
            {displayPointsInfo(3)}
          </HStack>
        </Stack>

        <Stack padding={4}>
          <RenderRow rowNumber={5}>
            <GridView rowElementsAmount={5} />
          </RenderRow>
        </Stack>

        <HStack
          display="flex"
          flexDirection="row"
          justifyContent="center"
          paddingTop={6}
          spacing={40}
        >
          <Button size="lg">Start</Button>
          <Button size="lg">Reset</Button>
        </HStack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
