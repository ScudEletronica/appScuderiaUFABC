import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import dark from "~/styles/themes/dark";
import light from "~/styles/themes/light";
import { storeJSON } from "~/utils/store";

export const AuthContext = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN": return state = action.value
    default: throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function AuthContextProvider({ children }) {
  var initState = {
    user: '',
    ra: 0,
    field: '',
    coordinator: false,
    name: '',
  }
  
  const [controller, dispatch] = useReducer(reducer, initState);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const getData = async () => {
      // Carrega o tema da memoria do aparelho
      var archived = await AsyncStorage.getItem('theme')
      if(archived) setTheme(JSON.parse(archived));
    }
    getData().catch(console.error);
  }, [])

  // Seleciona o tema claro
  const setLightTheme = () => {
    storeJSON('theme', light)
    setTheme(light)
  }

  // Seleciona o tema escuro
  const setDarkTheme = () => {
    storeJSON('theme', dark)
    setTheme(dark)
  }

  return (
    <AuthContext.Provider value={{controller, dispatch, theme, setLightTheme, setDarkTheme}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useUser() {
  const { controller } = useContext(AuthContext);
  const { user, ra, field, coordinator, name } = controller;
  return { user, ra, field, coordinator, name }
}

export function useTheme() {
  const { theme } = useContext(AuthContext);
  return theme;
}

export const useLogin = (dispatch, {user, ra, field, coordinator, name}) => dispatch({type: "LOGIN", value: {user, ra, field, coordinator, name}}
)