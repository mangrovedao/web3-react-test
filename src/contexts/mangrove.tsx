import React from "react";

const useMangroveContext = () => {
  return;
};

const MangroveContext = React.createContext<
  ReturnType<typeof useMangroveContext> | undefined
>(undefined);
MangroveContext.displayName = "MangroveContext";

export function MangroveProvider({ children }: React.PropsWithChildren) {
  const mangroveContext = useMangroveContext();
  return (
    <MangroveContext.Provider value={mangroveContext}>
      {children}
    </MangroveContext.Provider>
  );
}
