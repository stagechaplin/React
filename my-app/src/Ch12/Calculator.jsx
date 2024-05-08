import { useState } from 'react';
import TemperatureInput from './TemperatureInput';


function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p> 물이 끓습니다.</p>
  }
  return <p> 물이 끓지 않습니다.</p>
}

function toCelsius(fahreheit){
  return(fahreheit-32)*5/9;
}

function toFahreheit(celsius){
  return(celsius*9/5)+32;
}

function tryConvert(temperature,convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000)/1000;
  return rounded.toString();
}

function Calcuator(props){
  const [temperature, setTemperature] = useState('');
  const [scale,setScale] =useState("c");

  const handleCelsiusChange = (event) => {
    setTemperature(temperature);
    setScale("c");
};

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
};

const celsius = 
scale === "f" ? tryConvert(temperature,toCelsius) : temperature; 
const fahreheit = 
scale === "c" ? tryConvert(temperature,toFahreheit) : temperature; 

  return (
    <div>
      <TemperatureInput scale="c"
      temperature={celsius}
      onTemperatureChange={handleCelsiusChange}/>

      <TemperatureInput scale="f"
      temperature={fahreheit}
      onTemperatureChange={handleFahrenheitChange}/>
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default Calcuator;