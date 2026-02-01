import { useState } from "react";

import Loginform from "./components/LoginForm/Loginform";
import Chatbot from "./components/Chatbot/Chatbot";
import Header from "./components/Header/Header";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <Header />
      <Loginform setShowChatbot={setShowChatbot} />
      {showChatbot && <Chatbot />}
    </>
  );
}

export default App;
