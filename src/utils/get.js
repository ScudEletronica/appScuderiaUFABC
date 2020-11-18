import AsyncStorage from "@react-native-community/async-storage"

export const getJSON = async (key) => {
  const archived = await AsyncStorage.getItem(key)
  if(archived) return JSON.parse(archived);
}

export const getString = async (key) => {
  await AsyncStorage.setItem(key, value)
}