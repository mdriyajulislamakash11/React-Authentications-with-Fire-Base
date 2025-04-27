import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
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

  const providerGithub = new GithubAuthProvider();
  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const providerWithFacebook = new FacebookAuthProvider();

  const handleFacebookLogin = () => {
    signInWithPopup(auth, providerWithFacebook)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="form-control mt-6">
          {user ? (
            <button onClick={handleGoogleSignOut} className="btn btn-primary">
              Sign Out
            </button>
          ) : (
            <>
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                Login
              </button>

              <button onClick={handleGithubLogin} className="btn btn-success">
                Login With Github
              </button>

              <button onClick={handleFacebookLogin}>Facebook Login</button>
            </>
          )}

          {user && (
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Name: {user.displayName}</h2>
              <p>Email: {user.email}</p>
              <img
                src={user.photoURL}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto mt-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
