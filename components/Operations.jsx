import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Operations = ({ backSpace }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => backSpace()}>
        <FontAwesome5 name="backspace" size={24} color="#5e7cff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("this feature is not finished yet!")}
      >
        <FontAwesome5 name="history" size={24} color="#5e7cff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "lightgray",
    width: "100%",
    height: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});

export default Operations;
