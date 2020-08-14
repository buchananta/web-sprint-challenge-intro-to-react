// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const CharacterDiv = styled.div`
  border: black solid 2px;
  border-radius: 15px;
  max-width: 500px;
  margin: 1em auto;
  div {
    flex-flow: column;
    display: ${({hidden}) => hidden ? 'none' : 'flex' }
  }   
`


export default function Character({char}) {
  const [hidden, setHidden] = useState(false); 

  return (
    <CharacterDiv>
      <h2>{char.name}</h2>
      <div hidden={hidden}>
        <h3>Birth Year:{char.birth_year}</h3>
        <p>Eyes: {char.eye_color}</p>
        <p>Hair: {char.hair_color}</p>
        <p>Gender: {char.gender}</p>
        <p>Height: {char.height}</p>
        <p>Mass: {char.mass}</p>
      </div>
    </CharacterDiv>
  )
}