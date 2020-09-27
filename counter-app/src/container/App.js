import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counter";
import { Box, Card, Heading, Button, Flex } from "rebass";

const App = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <Flex justifyContent={"center"}>
      <Box width={256} mt={10}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
            textAlign: "center",
          }}
        >
          <Box px={2}>
            <Heading as="h1">{value}</Heading>
            <Button
              sx={{ color: "#000" }}
              variant="primary"
              mr={2}
              onClick={() => dispatch(increment())}
            >
              add
            </Button>
            <Button
              sx={{ color: "#000" }}
              onClick={() => dispatch(decrement())}
            >
              decre
            </Button>
          </Box>
        </Card>
      </Box>
    </Flex>
  );
};

export default App;
