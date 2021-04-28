import React from "react";
import { MsalProvider } from "@azure/msal-react";
import Welcome from "./pages/welcome";

function App({ pca }) {
  return (
    <MsalProvider instance={pca}>
      <main className="w-full h-screen">
        <Welcome />
      </main>
    </MsalProvider>
  );
}

export default App;
