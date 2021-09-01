import AsyncStorage from "@react-native-async-storage/async-storage"

// Armazena um JSON da memória do aparelho
export const storeJSON = async (key, value) => {
  const jsonValue = JSON.stringify(value)
  await AsyncStorage.setItem(key, jsonValue)
}

// Armazena uma string da memória do aparelho
export const storeString = async (key, value) => {
  await AsyncStorage.setItem(key, value)
}