import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
// import { createContext } from "react";
import Router from "./router/Router";
import "./styles.css";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
