import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.js";
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

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    console.log("Email: ", email);
    const password = event.target.password.value;
    console.log("PW: ", password);
    const confirmPassword = event.target.confirmPassword.value;
    console.log("CPW: ", confirmPassword);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // setDoc(doc(db, "users", userCredential.uid), {
        //   uid: userCredential.uid,
        //   email: userCredential.email,
        //   role: "customer"
        // });
        setSignUpSuccess(`Welcome! You've successfully signed up as ${userCredential.user.email}.`);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
    } else {
      setSignUpSuccess(`Passwords do not match. Please try again.`);
    }
  }

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