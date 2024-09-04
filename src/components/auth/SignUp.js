import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  // const [userSignedUp, setUserSignedUp] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserSignedUp(true);
  //     } else {
  //       setUserSignedUp(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  function doSignUp (event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignUpSuccess(`Passwords do not match. Please try again.`);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created user with email and password
        // Now set the user's role in Firestore
        setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role: "customer"  // Default role is "customer"
        })
        .then(() => {
          setSignUpSuccess(`Welcome! You've successfully signed up as ${userCredential.user.email}.`);
        })
        .catch((error) => {
          // Handle errors for setting document in Firestore
          setSignUpSuccess(`Error when setting user data in Firestore: ${error.message}`);
        });
      })
      .catch((error) => {
        // Handle errors for user creation in Auth
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  };

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`Successfully signed in as ${userCredential.user.email}.`);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess(`Successfully signed out.`);
      })
      .catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      <h2 className="sign-in headings">Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          {signUpSuccess}
          <form onSubmit={doSignUp}>
            <input className="form-control"
              type="text"
              name="email"
              placeholder="Email"/>
            <br/>
            <input className="form-control"
              type="password"
              name="password"
              placeholder="Password"/>
            <br/>
            <input className="form-control"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"/>
            <br/>
            <button className="btn app-buttons" type="submit">Sign Up</button>
          </form>
          <br/>

          <h2 className="sign-in-headings">Sign In</h2>
          {signInSuccess}
          <form onSubmit={doSignIn}>
            <input
              type="text"
              name="email"
              placeholder="Email"/>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"/>
            <br/>
            <button type="submit">Sign In</button>
          </form>
          <br/>

          {signOutSuccess}
          <br/>
          <button onClick={doSignOut}>Sign Out</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUp;