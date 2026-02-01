import { useState } from "react";
import LoginButtons from "./LoginButtons";
import LoginInput from "./LoginInput";

interface PassedProps {
  setShowChatbot: (show: boolean) => void;
}

export default function Loginform(props: PassedProps) {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("Log In clicked!");
    if (username && password) {
      props.setShowChatbot(true);
      setLoggedIn(true);
    } else {
      props.setShowChatbot(false);
      setLoggedIn(false);
    }
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked!");
    if (username && password) {
      props.setShowChatbot(true);
      setLoggedIn(true);
    } else {
      props.setShowChatbot(false);
      setLoggedIn(false);
    }
  };

  const handleLogOut = () => {
    console.log("Log Out clicked!");
    props.setShowChatbot(false);
    updateUsername("");
    updatePassword("");
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn && (
        <LoginInput
          username={username}
          updateUsername={updateUsername}
          password={password}
          updatePassword={updatePassword}
        />
      )}
      <LoginButtons
        handleLogIn={handleLogin}
        handleSignUp={handleSignUp}
        handleLogOut={handleLogOut}
        loggedIn={loggedIn}
      />
    </div>
  );
}
