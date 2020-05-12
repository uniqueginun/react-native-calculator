import React from "react";
import { StyleSheet, Text, View } from "react-native";
import KeyPad from "./components/KeyPad";
import Operations from "./components/Operations";
import InputPad from "./components/InputPad";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOprand: "",
      previousOprand: "",
      operator: undefined,
    };
  }

  backSpace() {
    let newCurrentOprand = this.state.currentOprand.toString().slice(0, -1);
    this.setState({ currentOprand: newCurrentOprand });
  }

  clearScreen() {
    this.setState((prevState) => {
      return {
        currentOprand: "",
        previousOprand: "",
        operator: undefined,
      };
    });
  }

  appendNumber = (number) => {
    if (number === "." && this.state.currentOprand.includes(".")) {
      return;
    }
    let oprand = this.state.currentOprand.toString() + number.toString();
    this.setState({ currentOprand: oprand });
  };

  appendOperatopn = (operator) => {
    if (this.state.currentOprand === "") {
      return;
    }
    if (this.state.previousOprand !== "") {
      this.calculate();
    }
    this.setState((prevState) => {
      return {
        previousOprand: prevState.currentOprand,
        currentOprand: "",
        operator,
      };
    });
  };

  calculate = () => {
    let current = parseFloat(this.state.currentOprand);
    let previous = parseFloat(this.state.previousOprand);
    if (isNaN(current) || isNaN(previous)) {
      return;
    }
    let computeResult;
    switch (this.state.operator) {
      case "%":
        computeResult = previous % current;
        break;

      case "÷":
        computeResult = previous / current;
        break;

      case "x":
        computeResult = previous * current;
        break;

      case "-":
        computeResult = previous - current;
        break;

      case "+":
        computeResult = previous + current;
        break;

      default:
        return;
    }
    this.setState((prevState) => {
      return {
        previousOprand: "",
        currentOprand: computeResult,
        operator: undefined,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputPad
          currentOprand={this.state.currentOprand}
          previousOprand={this.state.previousOprand}
          operator={this.state.operator}
        />
        <Operations backSpace={() => this.backSpace()} />
        <KeyPad
          appendNumber={(e) => this.appendNumber(e)}
          clearScreen={() => this.clearScreen()}
          appendOperatopn={(e) => this.appendOperatopn(e)}
          calculate={() => this.calculate()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
