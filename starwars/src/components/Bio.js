import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 1.2em;
  margin: .2em;
  letter-spacing: .14em;
`
export default function Bio({char}) {
  return (
    <>
      <StyledP>Birth Year:{char.birth_year}</StyledP>
      <StyledP>Eyes: {char.eye_color}</StyledP>
      <StyledP>Hair: {char.hair_color}</StyledP>
      <StyledP>Gender: {char.gender}</StyledP>
      <StyledP>Height: {char.height}</StyledP>
      <StyledP>Mass: {char.mass}</StyledP>
    </>
  )
}