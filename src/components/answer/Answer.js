import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler/react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons/build/Icons";

export default ({ icon, text, onPress, isLastOption }) => (
  <RectButton
    style={[styles.option, isLastOption && styles.lastOption]}
    onPress={onPress}
  >
    <View style={{ flexDirection: "row" }}>
      <View style={styles.optionIconContainer}>
        <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    </View>
  </RectButton>
);

const styles = StyleSheet.create({
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed"
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1
  }
});
