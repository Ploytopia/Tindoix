import { useState } from 'react';
import './ui/userInfo.css';
import Navbar from '../components/Navbar';
import Draggable from 'react-draggable';
import l from './ui/l2.png' ;
const SignupForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image/*')) {
      setIsUploading(true);
      setSelectedFile(file);
      showImage(file);
    } else {
      setIsUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const showImage = (file) => {
    const reader = new FileReader();
    reader.onload = function () {
      const imageDataURL = reader.result;
      const imageElement = document.getElementById('uploaded-image');
      if (imageElement) {
        imageElement.src = imageDataURL;
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUploadComplete = () => {
    setIsUploading(false);
    setUploadComplete(true);
  };
  const handleDateSelect = (e) => {
    setBirthday(e.target.value);
    calculateAge(e.target.value);
  };
  
  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
        <body className = "case1" >
        <header>
            <Navbar/>
          </header>
          <div className="signup-container">
            <div id="wrapp">
              <div id="image-wrapp" className={isDragging ? 'select' : ''}>
                <div id="text-wrapp">
                  <h1>Drop image to upload</h1>
                </div>
                <div
                  id="image-select"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => document.getElementById('file-select').click()}
                >
                  <svg viewBox="0 0 170 150">
                    <path d="M0,3.5 170,3.5 170,146.5 0,146.5z" />
                  </svg>
                  <input id="file-select" type="file" onChange={handleFileSelect} style={{ display: 'none' }} />
                </div>
              </div>

              {isUploading && (
                <div id="image-view">
                  <img id="uploaded-image" alt="Uploaded" />
                </div>
              )}
              {uploadComplete && (
                <div>
                  <p>Upload complete!</p>
                </div>
              )}

              <footer className="footer">
                <div className="set">
                  <button className="next" onClick={nextPage}>
                    Next
                  </button>
                </div>
              </footer>
            </div>
          </div>
              <Draggable><img className = "l" src={l} ></img></Draggable>
              {/*<Draggable><img className = "o" src={o} ></img></Draggable>
              <Draggable><img className = "v" src={v} ></img></Draggable>
              <Draggable><img className = "e" src={e} ></img></Draggable>
              <Draggable><img className = "cpmz" src={cpmz} ></img></Draggable>
            <Draggable><img className = "stamp" src={stamp} ></img></Draggable> */}
          </body>
        );
      /*---------------------------------------------------------------------------------------------*/
      case 2:
        return (
          <>
          <body className='case2'>
              <div className="title-form">
                <h1>INFORMATION FORM</h1>
              </div>
              <form className="User-form">
                <div className="set">
                  <div className="field-form">
                    <label>First Name :</label>
                    <input type="text" name="firstname" className="first-name" placeholder="First name" />
                  </div>
                  <div className="field-form">
                    <label>Last Name :</label>
                    <input type="text" name="lastname" className="last-name" placeholder="Last name" />
                  </div>
                </div>
                <div className="field-form gender-field">
                  <label>Gender:</label>
                  <div className="male-container">
                    <span>Male</span>
                    <input type="radio" name="gender" className="male" defaultValue="male" />
                  </div>
                  <div className="female-container">
                    <span>Female</span>
                    <input type="radio" name="gender" className="female" defaultValue="female" />
                  </div>
                  <div className="lgbtq-container">
                    <span>LGBTQ+</span>
                    <input type="radio" name="gender" className="lgbtq" defaultValue="lgbtq" />
                  </div>
                </div>
                <div className="field-form birthday-field">
                  <label>Birthday :</label>
                  <input
                    type="date"
                    name="birthday"
                    className="UserBirhday"
                    value={birthday}
                    onChange={handleDateSelect}
                  />
                    <label className="Age">Age :</label>
                      {age !== '' && <input type="text" value={age} disabled />}
                </div>
                <div className="field-form address">
                  <div className="AD">
                    <label>Address :</label>
                    <input type="text" name="address" placeholder="Address" />
                  </div>
                  <div className="AD">
                    <label>District:</label>
                    <input type="text" name="district" placeholder="District" />
                  </div>
                  <div className="AD">
                    <label>Sub-District :</label>
                    <input type="text" name="Sub-district" placeholder="Sub-District" />
                  </div>
                  <div className="AD">
                    <label>City :</label>
                    <input type="text" name="city" placeholder="City" />
                  </div>
                  <div className="AD">
                    <label>Country :</label>
                    <input type="text" name="country" placeholder="Country" />
                  </div>
                  <div className="AD">
                    <label>Postcode :</label>
                    <input type="text" name="postcode" placeholder="Postcode" />
                  </div>
                </div>
              </form>
              <footer className="footer">
                <div className="set">
                  <button id="back" onClick={prevPage}>
                    Back
                  </button>
                  <button id="next" onClick={nextPage}>
                    Next
                  </button>
                </div>
              </footer>
              </body>
          </>
        );
     
      default:
        return null;
    }
  };

  return (
    <body className="UserInfo">
      {renderPage()}
    </body>
  );
};

export default SignupForm;