import { Container } from "@/shared/ui/Container/Container";
import { Header } from "@/widgets/header";
import { NavBar } from "@/widgets/nav-bar";
import { TrackPage } from "@/pages/track-page";

import menuIcon from "@/shared/assets/icons/menu-alt-1.svg";

const App = () => {
  return (
    <Container>
      <Header icon={menuIcon} alt={"Menu"} title={"Auror Time"} />
      <NavBar />
      <TrackPage />
    </Container>
  );
};

export default App;
