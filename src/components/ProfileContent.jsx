import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../graph";
import { ProfileData } from "./ProfileData";

export function ProfileContent() {
  const { accounts, instance } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function requestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={requestProfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
}
