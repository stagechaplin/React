import React, {useState} from 'react';
function Reservation(props) {
  const [haveBreakfast, sethavebreakfast] = useState(true);
  const [numberOfGuest, setnumberOfGuest] = useState(2);
  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
    event.preventDefault();
  }
  return (
    <form onSubmit = {handleSubmit}>
      <label> 아침식사 여부: 
        <input type ="checkbox"
        checked = {haveBreakfast}
        onChange ={(event) => {sethavebreakfast(event.target.checked);}}/>
      </label>
      <br/>
    <label> 방문객 수:
      <input type = "number" checked = {numberOfGuest} onChange={(event) => { setnumberOfGuest(event.target.value);}}/>
      <button type = "submit">제출</button>
      </label>
    </form>
  );
}
export default Reservation;