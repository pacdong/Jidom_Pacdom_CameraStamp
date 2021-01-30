import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import CameraScreen from "./screens/CameraScreen";
import styles from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={styles}>
      <StatusBar style="light" />
      <CameraScreen />
    </ThemeProvider>
  );
}

export default App;
