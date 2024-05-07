import React, {useState} from 'react';
function UserStatus(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <div> 이 사용자는 현재 <b>{isLoggedIn ? '로그인' : '로그아웃'}</b> 상태 입니다</div>
 );
}

export default UserStatus;