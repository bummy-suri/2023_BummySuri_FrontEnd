import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

//불러온 지갑 주소 관리를 위한 context
//주소를 상위수준으로 올린 뒤 이 context로 접근하여 지갑주소 표시

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [userAddress, setUserAddress] = useState("");

  return (
    <UserContext.Provider value={{ userAddress, setUserAddress }}>
      {children}
    </UserContext.Provider>
  );
}
