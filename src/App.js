import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AppProvider } from "./context/AppContext";
import { CountProvider } from "./context/CountContext";

const App = () => {
  return (
    <AppProvider>
      <CountProvider>
        <div className="container">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </CountProvider>
    </AppProvider>
  );
};

export default App;
