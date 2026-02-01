interface PassedProps {
  username: string;
  password: string;
  updateUsername: (email: string) => void;
  updatePassword: (password: string) => void;
}

function LoginInput(props: PassedProps) {
  const { username, password, updateUsername, updatePassword } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => updateUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => updatePassword(e.target.value)}
      />
    </div>
  );
}

export default LoginInput;
