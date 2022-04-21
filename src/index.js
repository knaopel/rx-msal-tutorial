import "bootstrap/dist/css/bootstrap.min.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const msalInstance = new PublicClientApplication(msalConfig);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>
);
