import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <Menu />
      <Container fluid="md">
        {/* Me renderice el contenido de la página */}
        <Outlet />
      </Container>
    </>
  );
}
