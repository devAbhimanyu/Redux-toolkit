import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { Box, Card, Heading, Button, Flex } from "rebass";

class App extends Component {
  render() {
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
              <Heading as="h1">{this.props.value}</Heading>
              <Button
                sx={{ color: "#000" }}
                variant="primary"
                mr={2}
                onClick={this.props.increment}
              >
                add
              </Button>
              <Button sx={{ color: "#000" }} onClick={this.props.decrement}>
                decre
              </Button>
            </Box>
          </Card>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = { increment, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(App);
