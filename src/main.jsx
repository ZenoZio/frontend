import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

render(
  <AuthContextProvider>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
  </AuthContextProvider>,
  document.getElementById("app")
);
