import styled from "styled-components";


export const Modal = styled.div
`
    display: flex;
    position: absolute;
    top: 65px;
    left: 0;
    margin-left: 45px;
    margin-top: 35px;
    height: 400px;
    width: 1276px;
    animation: modal 2s 1;
    box-shadow: 0px 3px 6px #00000029;
    z-index: 1000;

  @keyframes modal {
    0%{
      opacity: 0;
    }

    60%{
      opacity: 1;
    }
  }
  
`
