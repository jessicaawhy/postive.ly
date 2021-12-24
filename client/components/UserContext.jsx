import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export const useUser = () => (
  useContext(UserContext)
);

export const useUserUpdate = () => (
  useContext(UserContextUpdate)
);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (id) => (
    setUser(id)
  );

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={updateUser}>
        { children }
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};
