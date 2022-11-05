import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GridView } from "./components/gridView";
import { RenderRow } from "./components/RenderRow";

const App = () => {
  const initialSeconds = 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [gameLife, setGameLife] = useState<number>(3);
  const [gamePoints, setGamePoints] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds - 1), 1000);
    if (seconds === 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [seconds]);

  const displayLifeInfo = () => {
    return (
      <Box
        border="1px solid white"
        padding={3}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="2xl"
          cursor="default"
          minWidth="110px"
        >
          Life: {gameLife}
        </Text>
      </Box>
    );
  };

  const displayPointsInfo = () => {
    return (
      <Box
        border="1px solid white"
        padding={3}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="2xl"
          cursor="default"
          minWidth="110px"
        >
          Points: {gamePoints}
        </Text>
      </Box>
    );
  };

  const displayTimer = (time: number) => {
    return (
      <Box
        border="1px solid white"
        padding={3}
        backgroundColor="white"
        borderRadius={4}
      >
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="2xl"
          cursor="default"
          minWidth="110px"
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
            paddingX={2}
          >
            {displayLifeInfo()}
            {displayTimer(seconds)}
            {displayPointsInfo()}
          </HStack>
        </Stack>

        <Stack padding={4}>
          {seconds === 0 ? (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
              maxWidth="50%"
              margin="0 auto"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Time's up.
              </AlertTitle>
              <AlertDescription maxWidth="sm" padding={4}>
                Please, try again.
              </AlertDescription>
            </Alert>
          ) : (
            <RenderRow rowNumber={5}>
              <GridView rowElementsAmount={5} />
            </RenderRow>
          )}
        </Stack>

        <HStack
          display="flex"
          flexDirection="row"
          justifyContent="center"
          paddingTop={6}
        >
          <Button width="150px" height="50px" onClick={() => setSeconds(60)}>
            Reset
          </Button>
        </HStack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
