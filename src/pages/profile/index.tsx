import React from "react";
import { useLocation } from "react-router-dom";

import { IProfilePassingState } from "../../models";

export function Profile() {
  const location = useLocation();
  const { username } = (location.state || { username: "ifilipe-lype" } ) as IProfilePassingState;

  return (
    <div>
      <h1>hello {username}, welcome to your profile</h1>
    </div>
  );
}

export default Profile;
