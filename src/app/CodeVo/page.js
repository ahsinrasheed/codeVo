import Client from "../Comoponents/Client";
import Footer from "../Comoponents/Footer";
import Hero from "../Comoponents/Hero";
import Idea from "../Comoponents/Idea";
import Navbar from "../Comoponents/Navbar";
import TrustedClients from "../Comoponents/TrustedClients";
import WorkProcess from "../Comoponents/WorkProcess";

const CodeVo = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Idea />
      {/* <WorkProcess /> */}
      <Client />
      <TrustedClients />
      <Footer />
    </>
  );
};

export default CodeVo;
