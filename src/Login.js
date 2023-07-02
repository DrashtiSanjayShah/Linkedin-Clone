import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const register = async (e) => {
    if (!name || !email || !password) {
      return alert('Please fill in all the fields.');
    }
    if (!name) {
      return alert('Please enter your display name.');
    }
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert('Successfully registered!');
    } catch (error) {
      console.log(error);
      alert('Registration failed. Please check your inputs and try again.');
    }
  };
  

  const loginToApp = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const displayName = name || userCredential.user.displayName || ''; // Use name if provided, otherwise use the existing display name or an empty string
      dispatch(
        login({
          name: displayName,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
      console.log('logged in');
    } catch (error) {
      console.log(error);
      alert('Incorrect email or password. Please try again.');
    }
  };
  

  return (
    <div className="login">
      <img
        src="https://blog.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png"
        alt=""
      />

      <form>
        <input
          type="text"
          value={name}
          placeholder="Full name (required if registering)"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="text"
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
          placeholder="Profile pic URL (optional)"
        /> */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
