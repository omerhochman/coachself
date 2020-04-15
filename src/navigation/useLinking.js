import { useLinking } from "@react-navigation/native/lib/typescript/src";
import { Linking } from "expo/build/Expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Home: "home",
          Links: "links",
          Settings: "settings"
        }
      }
    }
  });
}
