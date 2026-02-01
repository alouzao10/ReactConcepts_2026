interface PassedProps {
  handleLogIn: () => void;
  handleSignUp: () => void;
  handleLogOut: () => void;
  loggedIn: boolean;
}

function LoginButtons(props: PassedProps) {
  return (
    <div className="header-buttons">
      {!props.loggedIn && (
        <>
          <button
            className="btn btn-primary"
            onClick={() => props.handleLogIn()}
          >
            Log In
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.handleSignUp()}
          >
            Sign Up
          </button>
        </>
      )}

      {props.loggedIn && (
        <button
          className="btn btn-secondary"
          onClick={() => props.handleLogOut()}
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default LoginButtons;
