import { BrowserRouter } from "react-router-dom";
import "animate.css";
import NavbarApp from "./components/NavbarApp";
import RoutesApp from "./routes/RoutesApp";
import FooterApp from "./components/FooterApp";
import { MyProvider } from "./myContexto/MyContexto";

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <NavbarApp />
        <RoutesApp />
        <FooterApp />
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
