import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'; 
import './ui/logsign.css'; 
import Draggable from 'react-draggable';
import Navbar from '../components/Navbar';
import l from './ui/l2.png' ;
import o from './ui/o.png' ;
import v from './ui/v.png' ;
import e from './ui/E.png' ;
import cpmz from './ui/cupidmz.png' ;
import stamp from './ui/stamp.png' ;

function Logsign() {
  const [formState, setFormState] = useState('login'); // State to track which form to display
  const [showPassword, setShowPassword] = useState(false);

  
  const toggleForm = () => {
    setFormState(prevState => (prevState === 'login' ? 'signup' : 'login'));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
  <body className='LG'>
  <Navbar/>
   <section className="User">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className={formState === 'signup' ? 'user_options-unregistered' : 'user_options-registered'}>
            <div className="Text1 {formState === 'signup' ? 'user_unregistered-title' : 'user_registered-title'}">
              Don't have an account?
            </div>
            <p className={formState === 'signup' ? 'user_unregistered-text' : 'user_registered-text'}>
            "Even without an account, you're part of the journey. Join Tindoix and let the sparks fly, igniting connections you never knew were possible.
            </p>
            <button
              className={formState === 'signup' ? 'user_unregistered-signup' : 'user_registered-login'}
              onClick={toggleForm}
            >
              {formState === 'signup' ? 'Sign up' : 'Sign up'}
            </button>
          </div>
          <div className={formState === 'signup' ? 'user_options-unregistered' : 'user_options-registered'}>
            <div className="Text1{formState === 'signup' ? 'user_unregistered-title' : 'user_registered-title'}">
              Have an account?
            </div>
            <p className={formState === 'signup' ? 'user_unregistered-text' : 'user_registered-text'}>
            "Swipe into a world where connections collide, sparks fly, and love reigns supreme. Welcome to Tindoix, where cool meets cupid."
            </p>
            <button
              className={formState === 'signup' ? 'user_unregistered-signup' : 'user_registered-login'}
              onClick={toggleForm}
            >
              {formState === 'login' ? 'Log in' : 'Log in'}
            </button>
          </div>
        </div>
        <div className={`user_options-forms ${formState === 'signup' ? 'bounceLeft' : 'bounceRight'}`}>
          {formState === 'login' ? (
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" required autoFocus />
                  </div>
                  {/*<div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
          </div>*/}
          <div className="forms_field">
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="forms_field-input" required />
                    <button type="button" className="show-hide-button" onClick={togglePasswordVisibility}>
                      <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline} />
                    </button>
                  </div>
                </fieldset>
                <div className="forms_buttons" >
                  <button type="button" className="forms_buttons-forgot">
                    Forgot password?
                  </button>
                </div>
                <div className="forms_buttons">
                  <input type="submit" value="Submit" className="forms_buttons-action" />
                </div>
              </form>
            </div>
          ) : (
            <div className="user_forms-signup">
              <h2 className="forms_title">Create account</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="username" placeholder="Username" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required />
                  </div>
                  {/*<div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
                  </div>*/}

                  <div className="forms_field">
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="forms_field-input" required />
                    <button type="button" className="show-hide-button" onClick={togglePasswordVisibility}>
                      <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline} />
                    </button>
                  </div>

                  <div className="forms_field">
                    <input type={showPassword ? 'text' : 'password'} placeholder="Confirm password" className="forms_field-input" required />
                    <button type="button" className="show-hide-button" onClick={togglePasswordVisibility}>
                      <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline} />
                    </button>
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action" />
                </div>
              </form>
            </div>
          )}
        </div>
        <Draggable><img className = "l" src={l} ></img></Draggable>
        <Draggable><img className = "o" src={o} ></img></Draggable>
        <Draggable><img className = "v" src={v} ></img></Draggable>
        <Draggable><img className = "e" src={e} ></img></Draggable>
        <Draggable><img className = "cpmz" src={cpmz} ></img></Draggable>
        <Draggable><img className = "stamp" src={stamp} ></img></Draggable>
       {/* <Draggable><img className = "ticket" src={ticket} ></img></Draggable>*/}
       
      </div>
    </section>
    </body>
  )
}

export default Logsign;


