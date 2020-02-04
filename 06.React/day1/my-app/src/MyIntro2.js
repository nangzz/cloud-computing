import React from 'react';
const css = {
  color: 'red',
  fontSize: '40px'
};

const MyIntro2 = ({card}) => {
  return (
    <div style={css}>
  안녕하세요, 제 이름은 <b>{card.name}, 
  {card.email},
  {card.phone}</b> 입니다. 
    </div>
  )
}

export default MyIntro2;
