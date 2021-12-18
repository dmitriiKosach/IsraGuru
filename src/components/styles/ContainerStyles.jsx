import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1366px;
    animation: component 2s 1;


    @keyframes component {
        0%{
            opacity: 0;
        }

        60%{
            opacity: 1;
        }
    }
`
