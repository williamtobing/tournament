import Cards from "./Cards";
import Footer from "./Footer";

const Contest = ({ tournaments }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <h1 className="contest-title">Tournament</h1>
        <div className="contest">
          <div className="container">
            <Cards tournaments={tournaments} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contest;
