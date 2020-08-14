// Write your Character component here
import React, {useState, useEffect} from 'react';
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
  }
  div {
    display: ${({hidden}) => hidden && 'none'}

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