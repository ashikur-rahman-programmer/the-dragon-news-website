import Navbar from "@/app/components/shared/Navbar";
import Header from "../components/shared/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
