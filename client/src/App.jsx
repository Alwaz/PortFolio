import "./App.scss";
import { Navbar } from "./components";
import { About, Header, Footer, Skills, Work, Blogs } from "./container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
