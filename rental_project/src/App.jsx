import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Title from "./components/Title/Title.jsx";
import PropertyList from "./components/PropertyList/PropertyList.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        {" "}
        <Title />
        <PropertyList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
