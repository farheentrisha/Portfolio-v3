import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LiteModeContext = createContext({
  liteMode: false,
  setLiteMode: () => {},
});

export const LiteModeProvider = ({ children }) => {
  const [liteMode, setLiteMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("liteMode");
    if (stored === "1") setLiteMode(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("liteMode", liteMode ? "1" : "0");
  }, [liteMode]);

  const value = useMemo(() => ({ liteMode, setLiteMode }), [liteMode]);

  return (
    <LiteModeContext.Provider value={value}>
      {children}
    </LiteModeContext.Provider>
  );
};

export const useLiteMode = () => useContext(LiteModeContext);
