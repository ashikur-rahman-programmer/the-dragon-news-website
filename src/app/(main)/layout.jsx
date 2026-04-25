import Header from "@/app/components/shared/header";
import Navbar from "@/app/components/shared/Navbar";

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
