import styled from 'styled-components';

export const ButtonBig = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
    width: 220px;
    height: 50px;
    background-color: ${props => props.isAnimate === "true" ? "#f8f8f8" : "#2B2D2F"};
    border: 1px solid #2B2D2F;
    border-radius: 25px;
    color: ${props => props.isAnimate === "true" ? "#2B2D2F" : "#f8f8f8"};
    margin-right: 30px;
    animation: ${props => props.isAnimate === "true" ? "button 7s 1" : "none"};
    transition: all .3s linear;

    &:last-child{
     margin-right: 0px;
    }

    &:hover{
        background-color: ${props => props.isAnimate === "true" ? "#2B2D2F" : "#f8f8f8"};
        color: ${props => props.isAnimate === "true" ? "#f8f8f8" : "#2B2D2F"};
    }


    @keyframes button {
        0%{
            opacity: 0;
        }
        75%{
            opacity: 0;
        }
    100%{
        opacity: 1;
        }
    }
`
