import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components'

const StyledCard = styled.div`
    background-color: orange;  
    color: blue; 
`

function CharacterCard(props) {

    return (
        <StyledCard>
            <p>Gender:{props.gender} </p>
            <p>DOB:{props.birthday}</p>
            <p>Hair Color:{props.hairColor}</p>
            <p>Eye Color:{props.eyeColor}</p>
            <p>Mass:{props.mass}</p>
            <p>Rides:{props.rides} </p>
        </StyledCard>
    ); 
}

export default CharacterCard; 