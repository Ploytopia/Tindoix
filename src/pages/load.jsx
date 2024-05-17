import './ui/load.css';
import ProgressBar from './ui/PGBar';
import cupid from './ui/CP.mp3';

const Load = () => {
 
  return (
    <body className='loadBG'>
    <div className="App">
      <div className="Tindoix">
        <div className="logo">
          <p className="mid"><i>Tindoi</i><span><i>X</i></span></p><br />
          <p className="bottom">Searching for your soulmate</p>
        </div>
        <ProgressBar  />
      </div>
      <audio src={cupid} autoPlay ></audio>
    </div>
    </body>
  )
};

export default Load; 


