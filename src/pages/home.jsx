import Navbar from '../components/Navbar';

import './ui/home.css';

function Homepage  () {
  return (
    <body className="HomeBG">
    <Navbar/>
      <div className="landing-page">
        <div className="content">
          <div className="container">
            <div className="info">
              <div className="tindoix">
                Welcome to <span className="tindoi"><i>TINDOI</i></span><span className="x"><i>X</i></span>
              </div>
              <p className="tindoix">
                &ldquo;Love is seeing beauty in imperfection. Let's swipe for real connections,
              </p>
              <p className="tindoix">
                not just profiles. Here's to writing our love story, one TindoiX at a time.&rdquo;
              </p>
              <div>
                    <button className="button-56">Let Cupid work </button>
              </div>
            </div>
            <div className="envelope"></div>
            <div className="card">
              <div className="back"></div>
              <div className="front">
                <div className="f-box">
                  <img className="cover" src="https://assets.codepen.io/4927073/ValCard.png" alt="" />
                </div>
              </div>
              <div className="text-container">
                <p>&ldquo;Love is a game and I am a player&rdquo;</p>
                <img className='kiss' src="https://i.pinimg.com/originals/9b/f9/f0/9bf9f0192bc00c548a262540e2a1580a.png" alt="kiss mark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
};

export default Homepage ;
