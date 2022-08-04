import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
    height: 50px;
    color: #fff;
    text-align: center;
    margin: 10px 0;
`;

const Navbar = () => {
  return (
    <>
      <div className="autor">GDcode</div>
      <header>
        <Titulo>App Clima</Titulo>
      </header>
    </>
  )
}

export default Navbar