import React from 'react'; 
function  WarningBanner(props){

  if(!props.Warning){
    return null;
  }
  return (
    <div> 경고!</div>
  );
}

export default WarningBanner;