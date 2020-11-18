import AsyncStorage from "@react-native-community/async-storage"

export const storeJSON = async (key, value) => {
  const jsonValue = JSON.stringify(value)
  await AsyncStorage.setItem(key, jsonValue)
}

export const storeString = async (key, value) => {
  await AsyncStorage.setItem(key, value)
}