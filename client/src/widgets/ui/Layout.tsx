import { Header } from "features/ui/header";
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
 
export default Layout;