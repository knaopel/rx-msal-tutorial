export async function callAdo(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  return fetch('https://dev.azure.com/kurtopel/_apis/work/processes?api-version=7.1-preview.2', options)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
