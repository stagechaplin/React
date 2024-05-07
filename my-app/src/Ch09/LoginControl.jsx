import React,{ useState } from "react";
import LoginButton  from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting'
function LoginControl(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => { setIsLoggedIn(false);
  }
  let button;
  if (isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick} />;
  }else{
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
} 
export default LoginControl;

