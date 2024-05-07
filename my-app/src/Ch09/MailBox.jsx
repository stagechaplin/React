import React,{ useState} from 'react';

function MailBox(props) {
  const [unreadMessages, setunreadMessage] = useState(["a","b"]);  

  return (
    <div> 
      <h1> 안녕하세요 </h1>
      {unreadMessages.length > 0 && 
      <h2> 현재 {unreadMessages.length} 개의 읽지않은 메시지가 있습니다.</h2>
}
</div>
      
  );

}

export default MailBox;