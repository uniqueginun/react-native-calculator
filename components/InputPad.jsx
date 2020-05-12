import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InputPad = ({ currentOprand, previousOprand, operator }) => {
  const formattedNumber = (number) => {
    const numberString = number.toString();
    const numberArray = numberString.split(".");
    const integerPart = parseFloat(numberArray[0]);
    const decimalPart = numberArray[1];

    let formattedString;
    if (isNaN(integerPart)) {
      formattedString = "";
    } else {
      formattedString = integerPart.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    console.log(formattedString);

    if (decimalPart != null) {
      return `${formattedString}.${decimalPart}`;
    } else {
      return formattedString;
    }
  };

  const prevOperandText = operator
    ? `${formattedNumber(previousOprand)} ${operator}`
    : formattedNumber(previousOprand);

  return (
    <View style={styles.screen}>
      <Text style={styles.prevString}>{prevOperandText}</Text>
      <Text style={styles.result}>{formattedNumber(currentOprand)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "30%",
    paddingTop: 0,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
  },
  prevString: {
    fontSize: 30,
  },
  result: {
    fontSize: 22,
    color: "gray",
  },
});

export default InputPad;
