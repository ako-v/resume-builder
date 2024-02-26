import { useColorScheme } from "@mui/material";
import { Mode } from "@mui/system/cssVars/useCurrentColorScheme";
import { useEffect } from "react";

const useSetThemeMode = (mode: Mode) => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    if (mode) {
      setMode(mode);
      localStorage.setItem("mui-mode", mode);
    }
  }, [mode, setMode]);
};

export default useSetThemeMode;
