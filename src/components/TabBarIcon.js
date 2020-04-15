import * as React from "react";
import { Ionicons } from "@expo/vector-icons/build/Icons";

import Colors from "../common/constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
