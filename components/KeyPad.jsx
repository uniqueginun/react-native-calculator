import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const KeyPad = ({ clearScreen, appendNumber, appendOperatopn, calculate }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => clearScreen()}
          style={{ ...styles.col, backgroundColor: "#f5f7f7", flex: 1 }}
        >
          <Text style={{ fontSize: 30, color: "#5e7cff", fontWeight: "100" }}>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => appendOperatopn("%")}
          style={{ ...styles.col, backgroundColor: "#f5f7f7" }}
        >
          <Text style={{ fontSize: 30, color: "#5e7cff", fontWeight: "100" }}>
            %
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => appendOperatopn("÷")}
          style={{ ...styles.col, backgroundColor: "#f5f7f7" }}
        >
          <Text style={{ fontSize: 50, color: "#5e7cff", fontWeight: "100" }}>
            ÷
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber(7)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(8)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(9)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => appendOperatopn("x")}
          style={{ ...styles.col, backgroundColor: "#f5f7f7" }}
        >
          <Text style={{ fontSize: 30, color: "#5e7cff", fontWeight: "100" }}>
            x
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber(4)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(5)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(6)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => appendOperatopn("-")}
          style={{ ...styles.col, backgroundColor: "#f5f7f7" }}
        >
          <Text style={{ fontSize: 60, color: "#5e7cff", fontWeight: "100" }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber(1)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(2)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(3)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => appendOperatopn("+")}
          style={{ ...styles.col, backgroundColor: "#f5f7f7" }}
        >
          <Text style={{ fontSize: 47, color: "#5e7cff", fontWeight: "100" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber(".")} style={styles.col}>
          <Text style={{ fontSize: 30 }}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber(0)} style={styles.col}>
          <Text style={{ fontSize: 30 }}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calculate()}
          style={{ ...styles.col, backgroundColor: "#f59842", flex: 1 }}
        >
          <Text style={{ fontSize: 40, color: "white" }}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "65%",
    borderTopColor: "gray",
    borderTopWidth: 0.4,
  },
  row: {
    flexDirection: "row-reverse",
    width: "100%",
    height: "20%",
  },
  col: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
});

export default KeyPad;
