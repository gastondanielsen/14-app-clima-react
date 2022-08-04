import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
    form {
        div {
            display: flex;
            justify-content: center;

            input {
                width: 300px;
                padding: 10px;
                border: none;
                border-radius: 4px;
                outline: none;
            }
            button {
                padding: 10px;
                margin: 0 5px;
                border: none;
                border-radius: 4px;
                background-color: dodgerblue;
                color: #fff;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
            }
        }
    }
`;

const Form = ({newLocation}) => {

    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});

        if(city === '' || !city) return;

        newLocation(city);
        setCity('');
    }

  return (
    <Container>
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" value={city} placeholder='Ingrese una ciudad' onChange={(e) => setCity(e.target.value)} />
                <button type="submit">Buscar</button>
            </div>
        </form>
    </Container>
  )
}

export default Form