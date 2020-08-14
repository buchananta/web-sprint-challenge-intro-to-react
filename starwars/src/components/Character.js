// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';
import Bio from './Bio';

const CharacterDiv = styled.div`
  color: #FFE81F;
  background-color: black;
  border: black solid 2px;
  border-radius: 15px;
  max-width: 500px;
  margin: 1em auto; 
  h2 {
    cursor: pointer;
    transition-property: font-size;
    transition-duration: .3s;

    &:hover {
      font-size: 1.8em;
    }
  }
  div {
    display: ${({hidden}) => hidden && 'none'}
    transition-property: font-size;
    transition-duration: 1s;
    font-size: ${({hidden}) => hidden ? '1em' : '1'}
  }   
`

export default function Character({char}) {
  const [hidden, setHidden] = useState(true); 

  return (
    <CharacterDiv>
      <h2 onClick={() => setHidden(!hidden)} >{char.name}</h2>
      <div hidden={hidden}>
        <Bio char={char} />
      </div>
    </CharacterDiv>
  )
}