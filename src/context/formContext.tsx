/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode } from "react";
import { useLocalStore } from "mobx-react";

const createStore = () => {
  return {
    isLogin: true,
    login() {
      this.isLogin = true;
    },
    register() {
      this.isLogin = false;
    },
  };
};

export const storeContext = createContext<ReturnType<typeof createStore> | null>(null);

interface Props {
  children: ReactNode;
}

const FormContext: React.FC<Props> = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export { FormContext };
