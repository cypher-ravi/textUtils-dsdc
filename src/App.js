import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";
import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Github from "./components/Github";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });

    setTimeout(function () {
      setAlert(null);
    }, 1500);
  };

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode is enabled");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark mode is enabled");
    }
  };
  return (
    // <BrowserRouter>
      <>
        <Navbar
          mode={mode}
          handleMode={handleMode}
          title="TextUtils"
          aboutText="About Us"
        />
        <Alert alert={alert} />
        <div className="p-5">
          {/* <Routes> */}
          <TextForm showAlert={showAlert} mode={mode} />
            {/* <Route
              path="/"
              element={<TextForm showAlert={showAlert} mode={mode} />}
            />
            <Route path="/about" element={<AboutUs mode={mode} />} />
            <Route path="/github" element={<Github mode={mode} />} /> */}
          {/* </Routes> */}
        </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
