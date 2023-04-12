import styled from "styled-components";
import { useState, useEffect } from "react";
import env from "react-dotenv";
import LogoutButton from "../components/Signout";
import { useAuth0 } from "@auth0/auth0-react";
const AdminHead = () => {
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <>
      <LogoutButton />
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />

          <h1>Welcome {user.name}, </h1>
          {/* {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            "No user metadata defined"
          )} */}
        </div>
      )}
    </>
  );
};

export default AdminHead;
