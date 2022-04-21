import { graphConfig } from "./authConfig";

/**
 *
 * @param {*} accessToken
 * Attaches a given access token to a Microsoft Graph API call.
 * Returns information about the user.
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
