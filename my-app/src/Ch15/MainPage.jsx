import React from 'react';
import styled form 'styled-components';

const Wrapper = styled.div`
padding: 1em;
background: grey;
`;

const Title = styled.h1`
font-size: 1.5em;
color: white;
text-align: center;
`;

function MainPage(props){
  return (
    <Wrapper>
    <Title>
    안녕, 리액트!
    </Title></Wrapper>
  )
}


const name = "faul"
const region = "서울";

function mtTagFunction(strings, nameExp, regionExp) {
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];

  return `${str0}${nameExp}${str1}${regionExp}${str2}`;
}

const output = myTagFunction`제 이름은 ${name}이고, 사는 곳은 ${region}입니다.`;

console.log(output);
export default MainPage;