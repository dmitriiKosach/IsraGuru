import styled from 'styled-components';

export const ButtonClose = styled.button`
    position: fixed;
    background-color: #f8f8f8;
    right: 30px;
    top: 30px;
    z-index: 1;
    transition: all .3s linear;

    &:hover{
        transform: rotate(90deg);
    }

    & img{
        height: 25px;
    }
`