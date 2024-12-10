import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserContext from "./Context/userContext";

const Root = () => {
  return (
    <UserContext>
      <Header />
      <Outlet />
      <Footer />
    </UserContext>
  );
};

export default Root;
