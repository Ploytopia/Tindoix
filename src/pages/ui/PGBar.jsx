import './ProgressBar.css';
import CupidIcon from "./CPIcon.png";

const ProgressBar = () => (
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-indicator" /*style={{ width: `${progress}%` }}*/></div>
      <div className="Cupid">
        <img src={CupidIcon} alt="Cupid Icon" className="cupid-icon" />
      </div>
    </div>
  </div>
);

export default ProgressBar;
