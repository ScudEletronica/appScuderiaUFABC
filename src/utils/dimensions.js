import { Dimensions } from "react-native";

export function height(value) {
  return value + Dimensions.get('window').width - 360
}