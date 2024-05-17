import './App.css';
import Homepage from './pages/home';
import SignupForm from './pages/userInfo';
import { useState,useEffect } from 'react';
import Load from './pages/load' ;
import Logsign from './pages/logsign';
import ChatComponent from './pages/chat';
function App() {
   return(
    <>
      <ChatComponent/>
    </>
   )
}
export default App; 


/*function App() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the 7 seconds are up
  }, []); 

  return (
    <>  
       {loading ? <Load /> : <Homepage />}
    </>
  )
} 
export default App; */