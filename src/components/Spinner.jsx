import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  margin: 100px auto;
  border: 5px solid #EAF0F6;
  border-radius: 50%;
  border-top: 5px solid dodgerblue;
  width: 40px;
  height: 40px;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <Loader></Loader>;
};

export default Spinner;
