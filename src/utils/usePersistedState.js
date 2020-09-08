import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

async function usePersistedState(key, initialState) {
  const [state, setState] = await useState(async () => {
    const storageValue = await AsyncStorage.getItem(key)
    
    if (storageValue) {
      return JSON.parse(storageValue); 
    } else {
      return initialState;
    }
  });

  useEffect(async () => {
    await AsyncStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState]
}

export default usePersistedState;