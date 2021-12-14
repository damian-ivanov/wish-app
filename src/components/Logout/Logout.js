import { getAuth, signOut } from "firebase/auth";

export default function Logout () {

    const auth = getAuth();

    signOut(auth)
          .then(() => {
            console.log("user signed out");
          })
          .catch((error) => {
            console.log("error", error);
          });


    return (
        <h4>You are now logged out :)</h4>
    )
  }