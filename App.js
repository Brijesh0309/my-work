import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="MyAuthApp" aboutText="About" />

      <div className="container mt-5">
        <TextForm heading="Login & Registration System" />
      </div>
    </>
  );
}

export default App;