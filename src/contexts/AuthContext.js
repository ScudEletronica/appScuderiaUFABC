import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export function AuthContextProvider({ children, nUser, nRa, nField, nCoordinator, nName }) {
  const [user, setUser] = useState();
  const [ra, setRa ] = useState();
  const [field, setField ] = useState();
  const [coordinator, setCoordinator ] = useState();
  const [name, setName ] = useState();

  useEffect(() => {
    setUser(nUser)
    setRa(nRa)
    setField(nField)
    setCoordinator(nCoordinator)
    setName(nName)
  })

  return (
    <AuthContext.Provider value={{ user, ra, field, coordinator, name }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useUser() {
  const context = useContext(AuthContext);
  const { user, ra, field, coordinator, name } = context;
  return { user, ra, field, coordinator, name }
}