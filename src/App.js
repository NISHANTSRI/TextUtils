import Navbar from './Components/Navbar.js';
import './App.css';
import TextBox from './Components/TextBox.js';
import  {useState} from 'react';
import Alert from './Components/Alert.js';
// import About from './Components/About.js';


function App() {
  const [mode, setmode] = useState('light');
  // const [alert, setalert] = useState(null);

  // const showAlert = (message, type)=>{
    
  // }

  const toggleMode = ()=>{
      if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = 'black';
      }
      else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
      }
  }

  return (
    <>
    <Navbar title="Tsdfndk" mode={mode} toggleMode={toggleMode}/>
    <Alert/>
    <div className="conatainer"><TextBox heading="Enter Text" mode={mode} /></div>

    {/* <div className="container"><About/></div> */}
   
    
    </>
    
  );
}

export default App;
