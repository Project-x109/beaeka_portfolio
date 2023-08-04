import "./App.css";
import AppRouter from "./components/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
