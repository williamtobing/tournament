import Cards from "./Cards";
import Footer from "./Footer";

const Contest = () => {
  return (
    <>
      <h1 className="contest-title">Tournament</h1>
      <div className="contest">
        <div className="container">
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contest;
