import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../../routers/Routers";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="min-h-[80vh]">
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
