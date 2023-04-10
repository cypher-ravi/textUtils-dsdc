import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <>
    <Navbar  title="TextUtils" aboutText="About Us" /> 
    <div className="p-5">
      {/* <TextForm/> */}
      <AboutUs></AboutUs>
    </div>
    </>
  );
}

export default App;
