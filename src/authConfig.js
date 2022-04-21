export const msalConfig = {
  auth: {
    clientId: "53dc20a2-f248-480e-9cb4-4d675789ed67",
    authority:
      "https://login.microsoftonline.com/833a9480-bdcd-4d3d-9f4e-d0a7d9814209",
    redirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  }
};

export const apiConfig = {
  endpoint: "https://dev.azure.com/kurtopel/_apis/projects?api-version=4.0",
  scopes: ["499b84ac-1321-427f-aa17-267ca6975798/.default"] // do not change this value
};

export const loginRequest = {
  scopes: ["User.Read"]
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export const tokenRequest = {
  scopes: apiConfig.scopes,
  forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};
