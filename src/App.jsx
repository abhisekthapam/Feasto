import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Router from "./router/Router";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
        <ScrollToTopButton />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
