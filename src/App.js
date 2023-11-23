import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert1 from './components/Alert1';
import { Message } from '@mui/icons-material';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert({
      msg:message
    });
    setTimeout(()=>
    {
    setAlert(null);
    },3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled");
    }
  }
  return (
    <>
    
<Navbar title="Textutil" AboutText="About Text" mode={mode} toggleMode ={toggleMode}/>
<Alert1 Alert={alert}/>
<div className="container my-3">
<Textform heading="Enter the text to analyze here" mode={mode} showAlert={showAlert}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
