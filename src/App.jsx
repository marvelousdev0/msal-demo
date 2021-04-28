import React from "react";
import { MsalProvider } from "@azure/msal-react";
import Welcome from "./pages/welcome";

function App({ pca }) {
  return (
    <MsalProvider instance={pca}>
      <main>
        <Welcome />
      </main>
    </MsalProvider>
  );
}

export default App;
