import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../pages/Nav";
import Footer from "../component/Footer";

const HomeLayout = () => {
  return (
    <div className="App">
      <Header title="DLT Student Blog"/>
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
