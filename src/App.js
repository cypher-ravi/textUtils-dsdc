import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs'; 
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState(null)

 
  const showAlert = (type,message) => {
    setAlert({type:type, message:message})

    setTimeout(function() {
      setAlert(null)
    },1500)
  }

  const handleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success','Light mode is enabled')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success','Dark mode is enabled')
    }
  }
  return (
    <>
    <Navbar mode={mode} handleMode={handleMode}  title="TextUtils" aboutText="About Us" /> 
    <Alert alert={alert} />
    <div className="p-5">
      <TextForm showAlert={showAlert} mode={mode}/>
      {/* <AboutUs></AboutUs> */}
    </div>
    </>
  );
}

export default App;
