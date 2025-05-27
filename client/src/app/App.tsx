import { Container } from "@/shared/ui/Container/Container";
import { Header } from "@/widgets/header";
import { NavBar } from "@/widgets/nav-bar";
import { MainPage } from "@/pages/main-page";

const App = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <MainPage />
    </Container>
  );
};

export default App;
