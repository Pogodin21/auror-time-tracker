import { BrowserRouter } from "react-router-dom";
import { Container } from "@/shared/ui/Container/Container";
import { Header } from "@/widgets/header";
import { NavBar } from "@/widgets/nav-bar";
import { AppRouter } from "./providers/router";
import menuIcon from "@/shared/assets/icons/menu-alt-1.svg";

const App = () => (
  <BrowserRouter>
    <Container>
      <Header icon={menuIcon} alt={"Menu"} title={"Auror Time"} />
      <NavBar />
      <AppRouter />
    </Container>
  </BrowserRouter>
);

export default App;
