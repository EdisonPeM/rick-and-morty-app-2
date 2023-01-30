import { Outlet, ScrollRestoration } from "react-router-dom";

import Container from "components/Layout/Container";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

function App() {
  return (
    <div className="root-container">
      <ScrollRestoration />
      <Header />
      <main>
        <Container className="h-100">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
