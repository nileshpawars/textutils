import './App.css';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { Alert } from './components/Alert';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.className = '';
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
    else {
      setMode('dark');
      document.body.className = '';
      document.body.style.backgroundColor = '#012c4a';
      showAlert('Dark mode enabled', 'success');
    }
  }

  const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || "";

  const themeMode = (cls) => {
      document.body.className = '';
      document.body.classList.add('bg-' + cls);
      showAlert(capitalize(cls) + ' theme enabled', 'success');
  }
  
  return (
    <Router>
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} themeMode={themeMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path='TextUtils/'  element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />} />
          <Route exact path='TextUtils/about' element={<About/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
