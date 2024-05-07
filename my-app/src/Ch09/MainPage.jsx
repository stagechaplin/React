import React, {useState} from 'react';
import WarningBanner from './WarningBanner';

function MainPage(props){
  const [showWarning, setShowWarning] = useState(false);
  const handleToggleClick = () => {
    setShowWarning(preShowWarning => !prevShowWarning);
  }
  return (
    <div>
      <WarningBanner warning = {showWarning}/>
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>  
    );
}
export default MainPage;