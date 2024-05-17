import { IonIcon } from '@ionic/react';
import { homeOutline, heartOutline, chatbubblesOutline, settingsOutline } from 'ionicons/icons';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <body className='NavbarBG'>
      <header>
        <div className="container">
          <a href="#" className="logo">
            Tindoi<b>X</b>
          </a>
          <ul className="links">
            <li>
              <IonIcon className='HI' icon={homeOutline} alt="Home Icon" />
              <span className='Home'>Home</span>
            </li>
            <li>
              <IonIcon className='MI' icon={heartOutline} alt="Heart Icon" />
              <span className='Match'>Matching</span>
            </li>
            <li>
              <IonIcon className='CI' icon={chatbubblesOutline} alt="Chat Icon" />
              <span className='Chat'>Chat</span>
            </li>
            <li>
              <IonIcon className='SI' icon={settingsOutline} alt="Settings Icon" />
              <span className='Set'>Setting</span>
            </li>
            <li><button className='button-32'>Register</button></li>
          </ul>
        </div>
      </header>
      </body>
    </>
  );
}

export default Navbar;