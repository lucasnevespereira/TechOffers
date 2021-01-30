import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
