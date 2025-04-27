import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.init";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="form-control mt-6">
          {user ? (
            <button onClick={handleGoogleSignOut} className="btn btn-primary">
              {" "}
              Sign Out{" "}
            </button>
          ) : (
            <button onClick={handleGoogleLogin} className="btn btn-primary">
              {" "}
              Login{" "}
            </button>
          )}

          {user && (
            <div>
              <h2>name: {user.disPlayName}</h2>
              <p>Email: {user.email}</p>
              <img src={user.photoURL} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
