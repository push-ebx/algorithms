import { Header } from "widgets/ui/header";
import { Outlet } from "react-router-dom"
import { CustomOffCanvas } from "shared/ui";
import { useSelector } from "react-redux";
import { setShowOffCanvas } from "shared/ui/customOffCanvas/customOffCanvasSlice";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CustomOffCanvas
        setShow={setShowOffCanvas}
        // @ts-ignore
        show={useSelector(state => state.offCanvas)}
      />
    </>
  );
}
 
export default Layout;