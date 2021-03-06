import React from "react";

/**
 *
 * @param {ReactProperties} props
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => (
  <div id="profile-dev">
    <p>
      <strong>First Name: </strong>
      {props.graphData.givenName}
    </p>
    <p>
      <strong>Last Name: </strong>
      {props.graphData.suname}
    </p>
    <p>
      <strong>Email: </strong>
      {props.graphData.userPrincipalName}
    </p>
    <p>
      <strong>Id: </strong>
      {props.graphData.id}
    </p>
  </div>
);
