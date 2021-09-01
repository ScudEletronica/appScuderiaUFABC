import AsyncStorage from "@react-native-async-storage/async-storage"

// Carrega um JSON da memória do aparelho
export const getJSON = async (key) => {
  const archived = await AsyncStorage.getItem(key)
  if(archived) return JSON.parse(archived);
}

// Carrega uma string da memória do aparelho
export const getString = async (key) => {
  return await AsyncStorage.setItem(key, value)
}